
(function(l, r) { if (l.getElementById('livereloadscript')) return; r = l.createElement('script'); r.async = 1; r.src = '//' + (window.location.host || 'localhost').split(':')[0] + ':35729/livereload.js?snipver=1'; r.id = 'livereloadscript'; l.getElementsByTagName('head')[0].appendChild(r) })(window.document);
var app = (function () {
    'use strict';

    function noop() { }
    function assign(tar, src) {
        // @ts-ignore
        for (const k in src)
            tar[k] = src[k];
        return tar;
    }
    function add_location(element, file, line, column, char) {
        element.__svelte_meta = {
            loc: { file, line, column, char }
        };
    }
    function run(fn) {
        return fn();
    }
    function blank_object() {
        return Object.create(null);
    }
    function run_all(fns) {
        fns.forEach(run);
    }
    function is_function(thing) {
        return typeof thing === 'function';
    }
    function safe_not_equal(a, b) {
        return a != a ? b == b : a !== b || ((a && typeof a === 'object') || typeof a === 'function');
    }
    function is_empty(obj) {
        return Object.keys(obj).length === 0;
    }
    function create_slot(definition, ctx, $$scope, fn) {
        if (definition) {
            const slot_ctx = get_slot_context(definition, ctx, $$scope, fn);
            return definition[0](slot_ctx);
        }
    }
    function get_slot_context(definition, ctx, $$scope, fn) {
        return definition[1] && fn
            ? assign($$scope.ctx.slice(), definition[1](fn(ctx)))
            : $$scope.ctx;
    }
    function get_slot_changes(definition, $$scope, dirty, fn) {
        if (definition[2] && fn) {
            const lets = definition[2](fn(dirty));
            if ($$scope.dirty === undefined) {
                return lets;
            }
            if (typeof lets === 'object') {
                const merged = [];
                const len = Math.max($$scope.dirty.length, lets.length);
                for (let i = 0; i < len; i += 1) {
                    merged[i] = $$scope.dirty[i] | lets[i];
                }
                return merged;
            }
            return $$scope.dirty | lets;
        }
        return $$scope.dirty;
    }
    function update_slot(slot, slot_definition, ctx, $$scope, dirty, get_slot_changes_fn, get_slot_context_fn) {
        const slot_changes = get_slot_changes(slot_definition, $$scope, dirty, get_slot_changes_fn);
        if (slot_changes) {
            const slot_context = get_slot_context(slot_definition, ctx, $$scope, get_slot_context_fn);
            slot.p(slot_context, slot_changes);
        }
    }

    function append(target, node) {
        target.appendChild(node);
    }
    function insert(target, node, anchor) {
        target.insertBefore(node, anchor || null);
    }
    function detach(node) {
        node.parentNode.removeChild(node);
    }
    function destroy_each(iterations, detaching) {
        for (let i = 0; i < iterations.length; i += 1) {
            if (iterations[i])
                iterations[i].d(detaching);
        }
    }
    function element(name) {
        return document.createElement(name);
    }
    function svg_element(name) {
        return document.createElementNS('http://www.w3.org/2000/svg', name);
    }
    function text(data) {
        return document.createTextNode(data);
    }
    function space() {
        return text(' ');
    }
    function attr(node, attribute, value) {
        if (value == null)
            node.removeAttribute(attribute);
        else if (node.getAttribute(attribute) !== value)
            node.setAttribute(attribute, value);
    }
    function children(element) {
        return Array.from(element.childNodes);
    }
    function set_style(node, key, value, important) {
        node.style.setProperty(key, value, important ? 'important' : '');
    }
    function custom_event(type, detail) {
        const e = document.createEvent('CustomEvent');
        e.initCustomEvent(type, false, false, detail);
        return e;
    }

    let current_component;
    function set_current_component(component) {
        current_component = component;
    }
    function get_current_component() {
        if (!current_component)
            throw new Error('Function called outside component initialization');
        return current_component;
    }
    function onMount(fn) {
        get_current_component().$$.on_mount.push(fn);
    }

    const dirty_components = [];
    const binding_callbacks = [];
    const render_callbacks = [];
    const flush_callbacks = [];
    const resolved_promise = Promise.resolve();
    let update_scheduled = false;
    function schedule_update() {
        if (!update_scheduled) {
            update_scheduled = true;
            resolved_promise.then(flush);
        }
    }
    function add_render_callback(fn) {
        render_callbacks.push(fn);
    }
    let flushing = false;
    const seen_callbacks = new Set();
    function flush() {
        if (flushing)
            return;
        flushing = true;
        do {
            // first, call beforeUpdate functions
            // and update components
            for (let i = 0; i < dirty_components.length; i += 1) {
                const component = dirty_components[i];
                set_current_component(component);
                update(component.$$);
            }
            set_current_component(null);
            dirty_components.length = 0;
            while (binding_callbacks.length)
                binding_callbacks.pop()();
            // then, once components are updated, call
            // afterUpdate functions. This may cause
            // subsequent updates...
            for (let i = 0; i < render_callbacks.length; i += 1) {
                const callback = render_callbacks[i];
                if (!seen_callbacks.has(callback)) {
                    // ...so guard against infinite loops
                    seen_callbacks.add(callback);
                    callback();
                }
            }
            render_callbacks.length = 0;
        } while (dirty_components.length);
        while (flush_callbacks.length) {
            flush_callbacks.pop()();
        }
        update_scheduled = false;
        flushing = false;
        seen_callbacks.clear();
    }
    function update($$) {
        if ($$.fragment !== null) {
            $$.update();
            run_all($$.before_update);
            const dirty = $$.dirty;
            $$.dirty = [-1];
            $$.fragment && $$.fragment.p($$.ctx, dirty);
            $$.after_update.forEach(add_render_callback);
        }
    }
    const outroing = new Set();
    let outros;
    function group_outros() {
        outros = {
            r: 0,
            c: [],
            p: outros // parent group
        };
    }
    function check_outros() {
        if (!outros.r) {
            run_all(outros.c);
        }
        outros = outros.p;
    }
    function transition_in(block, local) {
        if (block && block.i) {
            outroing.delete(block);
            block.i(local);
        }
    }
    function transition_out(block, local, detach, callback) {
        if (block && block.o) {
            if (outroing.has(block))
                return;
            outroing.add(block);
            outros.c.push(() => {
                outroing.delete(block);
                if (callback) {
                    if (detach)
                        block.d(1);
                    callback();
                }
            });
            block.o(local);
        }
    }
    function create_component(block) {
        block && block.c();
    }
    function mount_component(component, target, anchor) {
        const { fragment, on_mount, on_destroy, after_update } = component.$$;
        fragment && fragment.m(target, anchor);
        // onMount happens before the initial afterUpdate
        add_render_callback(() => {
            const new_on_destroy = on_mount.map(run).filter(is_function);
            if (on_destroy) {
                on_destroy.push(...new_on_destroy);
            }
            else {
                // Edge case - component was destroyed immediately,
                // most likely as a result of a binding initialising
                run_all(new_on_destroy);
            }
            component.$$.on_mount = [];
        });
        after_update.forEach(add_render_callback);
    }
    function destroy_component(component, detaching) {
        const $$ = component.$$;
        if ($$.fragment !== null) {
            run_all($$.on_destroy);
            $$.fragment && $$.fragment.d(detaching);
            // TODO null out other refs, including component.$$ (but need to
            // preserve final state?)
            $$.on_destroy = $$.fragment = null;
            $$.ctx = [];
        }
    }
    function make_dirty(component, i) {
        if (component.$$.dirty[0] === -1) {
            dirty_components.push(component);
            schedule_update();
            component.$$.dirty.fill(0);
        }
        component.$$.dirty[(i / 31) | 0] |= (1 << (i % 31));
    }
    function init(component, options, instance, create_fragment, not_equal, props, dirty = [-1]) {
        const parent_component = current_component;
        set_current_component(component);
        const prop_values = options.props || {};
        const $$ = component.$$ = {
            fragment: null,
            ctx: null,
            // state
            props,
            update: noop,
            not_equal,
            bound: blank_object(),
            // lifecycle
            on_mount: [],
            on_destroy: [],
            before_update: [],
            after_update: [],
            context: new Map(parent_component ? parent_component.$$.context : []),
            // everything else
            callbacks: blank_object(),
            dirty,
            skip_bound: false
        };
        let ready = false;
        $$.ctx = instance
            ? instance(component, prop_values, (i, ret, ...rest) => {
                const value = rest.length ? rest[0] : ret;
                if ($$.ctx && not_equal($$.ctx[i], $$.ctx[i] = value)) {
                    if (!$$.skip_bound && $$.bound[i])
                        $$.bound[i](value);
                    if (ready)
                        make_dirty(component, i);
                }
                return ret;
            })
            : [];
        $$.update();
        ready = true;
        run_all($$.before_update);
        // `false` as a special case of no DOM component
        $$.fragment = create_fragment ? create_fragment($$.ctx) : false;
        if (options.target) {
            if (options.hydrate) {
                const nodes = children(options.target);
                // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
                $$.fragment && $$.fragment.l(nodes);
                nodes.forEach(detach);
            }
            else {
                // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
                $$.fragment && $$.fragment.c();
            }
            if (options.intro)
                transition_in(component.$$.fragment);
            mount_component(component, options.target, options.anchor);
            flush();
        }
        set_current_component(parent_component);
    }
    /**
     * Base class for Svelte components. Used when dev=false.
     */
    class SvelteComponent {
        $destroy() {
            destroy_component(this, 1);
            this.$destroy = noop;
        }
        $on(type, callback) {
            const callbacks = (this.$$.callbacks[type] || (this.$$.callbacks[type] = []));
            callbacks.push(callback);
            return () => {
                const index = callbacks.indexOf(callback);
                if (index !== -1)
                    callbacks.splice(index, 1);
            };
        }
        $set($$props) {
            if (this.$$set && !is_empty($$props)) {
                this.$$.skip_bound = true;
                this.$$set($$props);
                this.$$.skip_bound = false;
            }
        }
    }

    function dispatch_dev(type, detail) {
        document.dispatchEvent(custom_event(type, Object.assign({ version: '3.31.0' }, detail)));
    }
    function append_dev(target, node) {
        dispatch_dev('SvelteDOMInsert', { target, node });
        append(target, node);
    }
    function insert_dev(target, node, anchor) {
        dispatch_dev('SvelteDOMInsert', { target, node, anchor });
        insert(target, node, anchor);
    }
    function detach_dev(node) {
        dispatch_dev('SvelteDOMRemove', { node });
        detach(node);
    }
    function attr_dev(node, attribute, value) {
        attr(node, attribute, value);
        if (value == null)
            dispatch_dev('SvelteDOMRemoveAttribute', { node, attribute });
        else
            dispatch_dev('SvelteDOMSetAttribute', { node, attribute, value });
    }
    function validate_each_argument(arg) {
        if (typeof arg !== 'string' && !(arg && typeof arg === 'object' && 'length' in arg)) {
            let msg = '{#each} only iterates over array-like objects.';
            if (typeof Symbol === 'function' && arg && Symbol.iterator in arg) {
                msg += ' You can use a spread to convert this iterable into an array.';
            }
            throw new Error(msg);
        }
    }
    function validate_slots(name, slot, keys) {
        for (const slot_key of Object.keys(slot)) {
            if (!~keys.indexOf(slot_key)) {
                console.warn(`<${name}> received an unexpected slot "${slot_key}".`);
            }
        }
    }
    /**
     * Base class for Svelte components with some minor dev-enhancements. Used when dev=true.
     */
    class SvelteComponentDev extends SvelteComponent {
        constructor(options) {
            if (!options || (!options.target && !options.$$inline)) {
                throw new Error("'target' is a required option");
            }
            super();
        }
        $destroy() {
            super.$destroy();
            this.$destroy = () => {
                console.warn('Component was already destroyed'); // eslint-disable-line no-console
            };
        }
        $capture_state() { }
        $inject_state() { }
    }

    var twitter={title:"Twitter",slug:"twitter",svg:'<svg role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>Twitter icon</title><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/></svg>',get path(){return this.svg.match(/<path\s+d="([^"]*)/)[1]},source:"https://brand.twitter.com",hex:"1DA1F2"};

    var instagram={title:"Instagram",slug:"instagram",svg:'<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Instagram icon</title><path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z"/></svg>',get path(){return this.svg.match(/<path\s+d="([^"]*)/)[1]},source:"https://www.instagram-brand.com",hex:"E4405F"};

    var icon_rarible = {
      hex: '000000',
      path:
        'M27.6007 19.8536C28.8607 19.5262 29.9817 18.5838 29.9817 16.6889C29.9817 13.5342 27.3031 12.8 23.8706 12.8H10.2V27.0064H15.9539V22.185H22.7793C23.8309 22.185 24.446 22.6016 24.446 23.6334V27.0064H30.2V23.4548C30.2 21.5203 29.1087 20.3 27.6007 19.8536ZM22.8785 18.3556H15.9539V16.9667H22.8785C23.6325 16.9667 24.0888 17.0659 24.0888 17.6612C24.0888 18.2564 23.6325 18.3556 22.8785 18.3556Z',
    };

    const socials = [
      [
        {
          // type: 'rarible',
          url: 'https://app.rarible.com/hexis_wtf',
          username: 'hexis_wtf',
          color: 'yellow',
          ...icon_rarible,
          offset: 3,
        },
        {
          // type: 'twitter',
          url: 'https://twitter.com/hexis_wtf',
          username: '@hexis_wtf',
          color: 'blue',
          ...twitter,
        },
        {
          // type: 'instagram',
          url: 'https://www.instagram.com/hexis_wtf',
          username: 'hexis_wtf',
          color: 'red',
          ...instagram,
        },
      ],
    ];

    /* src/Social/HexBackground.svelte generated by Svelte v3.31.0 */

    const file = "src/Social/HexBackground.svelte";

    function create_fragment(ctx) {
    	let svg;
    	let path0;
    	let path1;
    	let svg_strokemiterlimit_value;
    	let current;
    	const default_slot_template = /*#slots*/ ctx[2].default;
    	const default_slot = create_slot(default_slot_template, ctx, /*$$scope*/ ctx[1], null);

    	const block = {
    		c: function create() {
    			svg = svg_element("svg");
    			path0 = svg_element("path");
    			path1 = svg_element("path");
    			if (default_slot) default_slot.c();
    			attr_dev(path0, "fill", "none");
    			attr_dev(path0, "d", "M0 0H36V36H0z");
    			add_location(path0, file, 12, 2, 215);
    			attr_dev(path1, "d", "M18 0l15.588 9v18L18 36 2.412 27V9L18 0z");
    			attr_dev(path1, "fill", /*fill*/ ctx[0]);
    			add_location(path1, file, 13, 2, 256);
    			attr_dev(svg, "viewBox", "0 0 36 36");
    			attr_dev(svg, "x", "0%");
    			attr_dev(svg, "y", "0%");
    			attr_dev(svg, "width", "100%");
    			attr_dev(svg, "height", "100%");
    			attr_dev(svg, "fillrule", "evenodd");
    			attr_dev(svg, "cliprule", "evenodd");
    			attr_dev(svg, "strokelinejoin", "round");
    			attr_dev(svg, "strokemiterlimit", svg_strokemiterlimit_value = 2);
    			add_location(svg, file, 4, 0, 50);
    		},
    		l: function claim(nodes) {
    			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, svg, anchor);
    			append_dev(svg, path0);
    			append_dev(svg, path1);

    			if (default_slot) {
    				default_slot.m(svg, null);
    			}

    			current = true;
    		},
    		p: function update(ctx, [dirty]) {
    			if (!current || dirty & /*fill*/ 1) {
    				attr_dev(path1, "fill", /*fill*/ ctx[0]);
    			}

    			if (default_slot) {
    				if (default_slot.p && dirty & /*$$scope*/ 2) {
    					update_slot(default_slot, default_slot_template, ctx, /*$$scope*/ ctx[1], dirty, null, null);
    				}
    			}
    		},
    		i: function intro(local) {
    			if (current) return;
    			transition_in(default_slot, local);
    			current = true;
    		},
    		o: function outro(local) {
    			transition_out(default_slot, local);
    			current = false;
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(svg);
    			if (default_slot) default_slot.d(detaching);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_fragment.name,
    		type: "component",
    		source: "",
    		ctx
    	});

    	return block;
    }

    function instance($$self, $$props, $$invalidate) {
    	let { $$slots: slots = {}, $$scope } = $$props;
    	validate_slots("HexBackground", slots, ['default']);
    	let { fill = "#ebebeb" } = $$props;
    	const writable_props = ["fill"];

    	Object.keys($$props).forEach(key => {
    		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<HexBackground> was created with unknown prop '${key}'`);
    	});

    	$$self.$$set = $$props => {
    		if ("fill" in $$props) $$invalidate(0, fill = $$props.fill);
    		if ("$$scope" in $$props) $$invalidate(1, $$scope = $$props.$$scope);
    	};

    	$$self.$capture_state = () => ({ fill });

    	$$self.$inject_state = $$props => {
    		if ("fill" in $$props) $$invalidate(0, fill = $$props.fill);
    	};

    	if ($$props && "$$inject" in $$props) {
    		$$self.$inject_state($$props.$$inject);
    	}

    	return [fill, $$scope, slots];
    }

    class HexBackground extends SvelteComponentDev {
    	constructor(options) {
    		super(options);
    		init(this, options, instance, create_fragment, safe_not_equal, { fill: 0 });

    		dispatch_dev("SvelteRegisterComponent", {
    			component: this,
    			tagName: "HexBackground",
    			options,
    			id: create_fragment.name
    		});
    	}

    	get fill() {
    		throw new Error("<HexBackground>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set fill(value) {
    		throw new Error("<HexBackground>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}
    }

    /* src/Social/HexIcon.svelte generated by Svelte v3.31.0 */
    const file$1 = "src/Social/HexIcon.svelte";

    // (27:2) <HexBackground fill="var(--hex-bg)">
    function create_default_slot(ctx) {
    	let g;
    	let path_1;
    	let g_transform_value;

    	const block = {
    		c: function create() {
    			g = svg_element("g");
    			path_1 = svg_element("path");
    			attr_dev(path_1, "d", /*path*/ ctx[2]);
    			attr_dev(path_1, "fill", "var(--fill)");
    			add_location(path_1, file$1, 28, 6, 639);
    			attr_dev(g, "transform", g_transform_value = `translate(${/*OFFSET*/ ctx[3]},${/*OFFSET*/ ctx[3]}) scale(0.75)`);
    			add_location(g, file$1, 27, 4, 572);
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, g, anchor);
    			append_dev(g, path_1);
    		},
    		p: noop,
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(g);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_default_slot.name,
    		type: "slot",
    		source: "(27:2) <HexBackground fill=\\\"var(--hex-bg)\\\">",
    		ctx
    	});

    	return block;
    }

    function create_fragment$1(ctx) {
    	let a;
    	let hexbackground;
    	let current;

    	hexbackground = new HexBackground({
    			props: {
    				fill: "var(--hex-bg)",
    				$$slots: { default: [create_default_slot] },
    				$$scope: { ctx }
    			},
    			$$inline: true
    		});

    	const block = {
    		c: function create() {
    			a = element("a");
    			create_component(hexbackground.$$.fragment);
    			attr_dev(a, "href", /*url*/ ctx[0]);
    			attr_dev(a, "target", "_blank");
    			set_style(a, "--base-hex-bg", "var(--" + /*color*/ ctx[1] + "-400)");
    			set_style(a, "--base-fill", "var(--grey-700)");
    			set_style(a, "--hover-hex-bg", "var(--" + /*color*/ ctx[1] + "-700)");
    			set_style(a, "--hover-fill", "var(--grey-200)");
    			attr_dev(a, "class", "svelte-1orppjp");
    			add_location(a, file$1, 21, 0, 351);
    		},
    		l: function claim(nodes) {
    			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, a, anchor);
    			mount_component(hexbackground, a, null);
    			current = true;
    		},
    		p: function update(ctx, [dirty]) {
    			const hexbackground_changes = {};

    			if (dirty & /*$$scope*/ 64) {
    				hexbackground_changes.$$scope = { dirty, ctx };
    			}

    			hexbackground.$set(hexbackground_changes);
    		},
    		i: function intro(local) {
    			if (current) return;
    			transition_in(hexbackground.$$.fragment, local);
    			current = true;
    		},
    		o: function outro(local) {
    			transition_out(hexbackground.$$.fragment, local);
    			current = false;
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(a);
    			destroy_component(hexbackground);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_fragment$1.name,
    		type: "component",
    		source: "",
    		ctx
    	});

    	return block;
    }

    function instance$1($$self, $$props, $$invalidate) {
    	let { $$slots: slots = {}, $$scope } = $$props;
    	validate_slots("HexIcon", slots, []);
    	let { social } = $$props;
    	const { url, color, path, offset } = social;
    	let OFFSET = offset ? offset : 9;
    	const writable_props = ["social"];

    	Object.keys($$props).forEach(key => {
    		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<HexIcon> was created with unknown prop '${key}'`);
    	});

    	$$self.$$set = $$props => {
    		if ("social" in $$props) $$invalidate(4, social = $$props.social);
    	};

    	$$self.$capture_state = () => ({
    		HexBackground,
    		social,
    		url,
    		color,
    		path,
    		offset,
    		OFFSET
    	});

    	$$self.$inject_state = $$props => {
    		if ("social" in $$props) $$invalidate(4, social = $$props.social);
    		if ("OFFSET" in $$props) $$invalidate(3, OFFSET = $$props.OFFSET);
    	};

    	if ($$props && "$$inject" in $$props) {
    		$$self.$inject_state($$props.$$inject);
    	}

    	return [url, color, path, OFFSET, social];
    }

    class HexIcon extends SvelteComponentDev {
    	constructor(options) {
    		super(options);
    		init(this, options, instance$1, create_fragment$1, safe_not_equal, { social: 4 });

    		dispatch_dev("SvelteRegisterComponent", {
    			component: this,
    			tagName: "HexIcon",
    			options,
    			id: create_fragment$1.name
    		});

    		const { ctx } = this.$$;
    		const props = options.props || {};

    		if (/*social*/ ctx[4] === undefined && !("social" in props)) {
    			console.warn("<HexIcon> was created without expected prop 'social'");
    		}
    	}

    	get social() {
    		throw new Error("<HexIcon>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set social(value) {
    		throw new Error("<HexIcon>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}
    }

    /* src/Social/index.svelte generated by Svelte v3.31.0 */
    const file$2 = "src/Social/index.svelte";

    function get_each_context(ctx, list, i) {
    	const child_ctx = ctx.slice();
    	child_ctx[0] = list[i];
    	return child_ctx;
    }

    // (20:2) {#each socials[0] as social}
    function create_each_block(ctx) {
    	let hexicon;
    	let current;

    	hexicon = new HexIcon({
    			props: { social: /*social*/ ctx[0] },
    			$$inline: true
    		});

    	const block = {
    		c: function create() {
    			create_component(hexicon.$$.fragment);
    		},
    		m: function mount(target, anchor) {
    			mount_component(hexicon, target, anchor);
    			current = true;
    		},
    		p: noop,
    		i: function intro(local) {
    			if (current) return;
    			transition_in(hexicon.$$.fragment, local);
    			current = true;
    		},
    		o: function outro(local) {
    			transition_out(hexicon.$$.fragment, local);
    			current = false;
    		},
    		d: function destroy(detaching) {
    			destroy_component(hexicon, detaching);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_each_block.name,
    		type: "each",
    		source: "(20:2) {#each socials[0] as social}",
    		ctx
    	});

    	return block;
    }

    function create_fragment$2(ctx) {
    	let div2;
    	let div0;
    	let t0;
    	let t1;
    	let div1;
    	let current;
    	let each_value = socials[0];
    	validate_each_argument(each_value);
    	let each_blocks = [];

    	for (let i = 0; i < each_value.length; i += 1) {
    		each_blocks[i] = create_each_block(get_each_context(ctx, each_value, i));
    	}

    	const out = i => transition_out(each_blocks[i], 1, 1, () => {
    		each_blocks[i] = null;
    	});

    	const block = {
    		c: function create() {
    			div2 = element("div");
    			div0 = element("div");
    			t0 = space();

    			for (let i = 0; i < each_blocks.length; i += 1) {
    				each_blocks[i].c();
    			}

    			t1 = space();
    			div1 = element("div");
    			add_location(div0, file$2, 18, 2, 288);
    			add_location(div1, file$2, 22, 2, 364);
    			attr_dev(div2, "class", "socials svelte-1hyhuqh");
    			add_location(div2, file$2, 17, 0, 264);
    		},
    		l: function claim(nodes) {
    			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, div2, anchor);
    			append_dev(div2, div0);
    			append_dev(div2, t0);

    			for (let i = 0; i < each_blocks.length; i += 1) {
    				each_blocks[i].m(div2, null);
    			}

    			append_dev(div2, t1);
    			append_dev(div2, div1);
    			current = true;
    		},
    		p: function update(ctx, [dirty]) {
    			if (dirty & /*socials*/ 0) {
    				each_value = socials[0];
    				validate_each_argument(each_value);
    				let i;

    				for (i = 0; i < each_value.length; i += 1) {
    					const child_ctx = get_each_context(ctx, each_value, i);

    					if (each_blocks[i]) {
    						each_blocks[i].p(child_ctx, dirty);
    						transition_in(each_blocks[i], 1);
    					} else {
    						each_blocks[i] = create_each_block(child_ctx);
    						each_blocks[i].c();
    						transition_in(each_blocks[i], 1);
    						each_blocks[i].m(div2, t1);
    					}
    				}

    				group_outros();

    				for (i = each_value.length; i < each_blocks.length; i += 1) {
    					out(i);
    				}

    				check_outros();
    			}
    		},
    		i: function intro(local) {
    			if (current) return;

    			for (let i = 0; i < each_value.length; i += 1) {
    				transition_in(each_blocks[i]);
    			}

    			current = true;
    		},
    		o: function outro(local) {
    			each_blocks = each_blocks.filter(Boolean);

    			for (let i = 0; i < each_blocks.length; i += 1) {
    				transition_out(each_blocks[i]);
    			}

    			current = false;
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(div2);
    			destroy_each(each_blocks, detaching);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_fragment$2.name,
    		type: "component",
    		source: "",
    		ctx
    	});

    	return block;
    }

    function instance$2($$self, $$props, $$invalidate) {
    	let { $$slots: slots = {}, $$scope } = $$props;
    	validate_slots("Social", slots, []);
    	const writable_props = [];

    	Object.keys($$props).forEach(key => {
    		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<Social> was created with unknown prop '${key}'`);
    	});

    	$$self.$capture_state = () => ({ socials, HexIcon });
    	return [];
    }

    class Social extends SvelteComponentDev {
    	constructor(options) {
    		super(options);
    		init(this, options, instance$2, create_fragment$2, safe_not_equal, {});

    		dispatch_dev("SvelteRegisterComponent", {
    			component: this,
    			tagName: "Social",
    			options,
    			id: create_fragment$2.name
    		});
    	}
    }

    /* src/Metadata.svelte generated by Svelte v3.31.0 */

    const file$3 = "src/Metadata.svelte";

    function create_fragment$3(ctx) {
    	let div;
    	let p0;
    	let t1;
    	let p1;
    	let t3;
    	let p2;
    	let t5;
    	let p3;
    	let t7;
    	let p4;
    	let t9;
    	let p5;
    	let t11;
    	let p6;
    	let t13;
    	let p7;
    	let t15;
    	let p8;
    	let t17;
    	let p9;
    	let t19;
    	let p10;

    	const block = {
    		c: function create() {
    			div = element("div");
    			p0 = element("p");
    			p0.textContent = "12020.12.25.00:35:27";
    			t1 = space();
    			p1 = element("p");
    			p1.textContent = "s 653,666";
    			t3 = space();
    			p2 = element("p");
    			p2.textContent = "i 22";
    			t5 = space();
    			p3 = element("p");
    			p3.textContent = "x 1";
    			t7 = space();
    			p4 = element("p");
    			p4.textContent = "y 1";
    			t9 = space();
    			p5 = element("p");
    			p5.textContent = "c 0.8";
    			t11 = space();
    			p6 = element("p");
    			p6.textContent = "v 0.5";
    			t13 = space();
    			p7 = element("p");
    			p7.textContent = "z 8";
    			t15 = space();
    			p8 = element("p");
    			p8.textContent = "p 4";
    			t17 = space();
    			p9 = element("p");
    			p9.textContent = "r 3";
    			t19 = space();
    			p10 = element("p");
    			p10.textContent = "k 1 0";
    			attr_dev(p0, "class", "svelte-1hgcabd");
    			add_location(p0, file$3, 4, 2, 45);
    			attr_dev(p1, "class", "svelte-1hgcabd");
    			add_location(p1, file$3, 5, 2, 75);
    			attr_dev(p2, "class", "svelte-1hgcabd");
    			add_location(p2, file$3, 6, 2, 94);
    			attr_dev(p3, "class", "svelte-1hgcabd");
    			add_location(p3, file$3, 7, 2, 108);
    			attr_dev(p4, "class", "svelte-1hgcabd");
    			add_location(p4, file$3, 8, 2, 121);
    			attr_dev(p5, "class", "svelte-1hgcabd");
    			add_location(p5, file$3, 9, 2, 134);
    			attr_dev(p6, "class", "svelte-1hgcabd");
    			add_location(p6, file$3, 10, 2, 149);
    			attr_dev(p7, "class", "svelte-1hgcabd");
    			add_location(p7, file$3, 11, 2, 164);
    			attr_dev(p8, "class", "svelte-1hgcabd");
    			add_location(p8, file$3, 12, 2, 177);
    			attr_dev(p9, "class", "svelte-1hgcabd");
    			add_location(p9, file$3, 13, 2, 190);
    			attr_dev(p10, "class", "svelte-1hgcabd");
    			add_location(p10, file$3, 14, 2, 203);
    			attr_dev(div, "class", "metadata svelte-1hgcabd");
    			add_location(div, file$3, 3, 0, 20);
    		},
    		l: function claim(nodes) {
    			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, div, anchor);
    			append_dev(div, p0);
    			append_dev(div, t1);
    			append_dev(div, p1);
    			append_dev(div, t3);
    			append_dev(div, p2);
    			append_dev(div, t5);
    			append_dev(div, p3);
    			append_dev(div, t7);
    			append_dev(div, p4);
    			append_dev(div, t9);
    			append_dev(div, p5);
    			append_dev(div, t11);
    			append_dev(div, p6);
    			append_dev(div, t13);
    			append_dev(div, p7);
    			append_dev(div, t15);
    			append_dev(div, p8);
    			append_dev(div, t17);
    			append_dev(div, p9);
    			append_dev(div, t19);
    			append_dev(div, p10);
    		},
    		p: noop,
    		i: noop,
    		o: noop,
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(div);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_fragment$3.name,
    		type: "component",
    		source: "",
    		ctx
    	});

    	return block;
    }

    function instance$3($$self, $$props) {
    	let { $$slots: slots = {}, $$scope } = $$props;
    	validate_slots("Metadata", slots, []);
    	const writable_props = [];

    	Object.keys($$props).forEach(key => {
    		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<Metadata> was created with unknown prop '${key}'`);
    	});

    	return [];
    }

    class Metadata extends SvelteComponentDev {
    	constructor(options) {
    		super(options);
    		init(this, options, instance$3, create_fragment$3, safe_not_equal, {});

    		dispatch_dev("SvelteRegisterComponent", {
    			component: this,
    			tagName: "Metadata",
    			options,
    			id: create_fragment$3.name
    		});
    	}
    }

    /* src/App.svelte generated by Svelte v3.31.0 */
    const file$4 = "src/App.svelte";

    // (36:1) {#if mounted}
    function create_if_block(ctx) {
    	let footer;
    	let socials;
    	let current;
    	socials = new Social({ $$inline: true });

    	const block = {
    		c: function create() {
    			footer = element("footer");
    			create_component(socials.$$.fragment);
    			attr_dev(footer, "class", "svelte-1vlkhuf");
    			add_location(footer, file$4, 36, 2, 844);
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, footer, anchor);
    			mount_component(socials, footer, null);
    			current = true;
    		},
    		i: function intro(local) {
    			if (current) return;
    			transition_in(socials.$$.fragment, local);
    			current = true;
    		},
    		o: function outro(local) {
    			transition_out(socials.$$.fragment, local);
    			current = false;
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(footer);
    			destroy_component(socials);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_if_block.name,
    		type: "if",
    		source: "(36:1) {#if mounted}",
    		ctx
    	});

    	return block;
    }

    function create_fragment$4(ctx) {
    	let main;
    	let h10;
    	let t1;
    	let h11;
    	let t3;
    	let p0;
    	let span0;
    	let t4;
    	let a0;
    	let t6;
    	let span1;
    	let t7;
    	let a1;
    	let t9;
    	let a2;
    	let img;
    	let img_src_value;
    	let t10;
    	let p1;
    	let span2;
    	let t12;
    	let span3;
    	let t14;
    	let div;
    	let t15;
    	let metadata;
    	let t16;
    	let current;
    	metadata = new Metadata({ $$inline: true });
    	let if_block = /*mounted*/ ctx[0] && create_if_block(ctx);

    	const block = {
    		c: function create() {
    			main = element("main");
    			h10 = element("h1");
    			h10.textContent = "season 01 begins";
    			t1 = space();
    			h11 = element("h1");
    			h11.textContent = "s01 begins";
    			t3 = space();
    			p0 = element("p");
    			span0 = element("span");
    			t4 = text("created by ");
    			a0 = element("a");
    			a0.textContent = "Felix Green";
    			t6 = space();
    			span1 = element("span");
    			t7 = text("and ");
    			a1 = element("a");
    			a1.textContent = "Trenton McBeth";
    			t9 = space();
    			a2 = element("a");
    			img = element("img");
    			t10 = space();
    			p1 = element("p");
    			span2 = element("span");
    			span2.textContent = "follow us";
    			t12 = space();
    			span3 = element("span");
    			span3.textContent = "@hexis_wtf";
    			t14 = space();
    			div = element("div");
    			t15 = space();
    			create_component(metadata.$$.fragment);
    			t16 = space();
    			if (if_block) if_block.c();
    			attr_dev(h10, "class", "desktop svelte-1vlkhuf");
    			add_location(h10, file$4, 14, 1, 255);
    			attr_dev(h11, "class", "mobile svelte-1vlkhuf");
    			add_location(h11, file$4, 15, 1, 298);
    			attr_dev(a0, "href", "https://twitter.com/felixakiragreen");
    			attr_dev(a0, "target", "_blank");
    			attr_dev(a0, "class", "svelte-1vlkhuf");
    			add_location(a0, file$4, 17, 30, 368);
    			attr_dev(span0, "class", "nb svelte-1vlkhuf");
    			add_location(span0, file$4, 17, 2, 340);
    			attr_dev(a1, "href", "https://twitter.com/Macbeth_wtf");
    			attr_dev(a1, "target", "_blank");
    			attr_dev(a1, "class", "svelte-1vlkhuf");
    			add_location(a1, file$4, 18, 23, 476);
    			attr_dev(span1, "class", "nb svelte-1vlkhuf");
    			add_location(span1, file$4, 18, 2, 455);
    			add_location(p0, file$4, 16, 1, 334);
    			if (img.src !== (img_src_value = "hexis-640.png")) attr_dev(img, "src", img_src_value);
    			attr_dev(img, "alt", "Hexis Logo");
    			attr_dev(img, "class", "svelte-1vlkhuf");
    			add_location(img, file$4, 21, 2, 614);
    			attr_dev(a2, "href", "https://app.rarible.com/hexis_wtf");
    			attr_dev(a2, "class", "svelte-1vlkhuf");
    			add_location(a2, file$4, 20, 1, 567);
    			set_style(span2, "color", "var(--grey-400)");
    			add_location(span2, file$4, 25, 2, 673);
    			set_style(span3, "color", "var(--grey-100)");
    			add_location(span3, file$4, 26, 2, 730);
    			add_location(p1, file$4, 24, 1, 667);
    			add_location(div, file$4, 29, 1, 795);
    			attr_dev(main, "class", "svelte-1vlkhuf");
    			add_location(main, file$4, 13, 0, 247);
    		},
    		l: function claim(nodes) {
    			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, main, anchor);
    			append_dev(main, h10);
    			append_dev(main, t1);
    			append_dev(main, h11);
    			append_dev(main, t3);
    			append_dev(main, p0);
    			append_dev(p0, span0);
    			append_dev(span0, t4);
    			append_dev(span0, a0);
    			append_dev(p0, t6);
    			append_dev(p0, span1);
    			append_dev(span1, t7);
    			append_dev(span1, a1);
    			append_dev(main, t9);
    			append_dev(main, a2);
    			append_dev(a2, img);
    			append_dev(main, t10);
    			append_dev(main, p1);
    			append_dev(p1, span2);
    			append_dev(p1, t12);
    			append_dev(p1, span3);
    			append_dev(main, t14);
    			append_dev(main, div);
    			append_dev(main, t15);
    			mount_component(metadata, main, null);
    			append_dev(main, t16);
    			if (if_block) if_block.m(main, null);
    			current = true;
    		},
    		p: function update(ctx, [dirty]) {
    			if (/*mounted*/ ctx[0]) {
    				if (if_block) {
    					if (dirty & /*mounted*/ 1) {
    						transition_in(if_block, 1);
    					}
    				} else {
    					if_block = create_if_block(ctx);
    					if_block.c();
    					transition_in(if_block, 1);
    					if_block.m(main, null);
    				}
    			} else if (if_block) {
    				group_outros();

    				transition_out(if_block, 1, 1, () => {
    					if_block = null;
    				});

    				check_outros();
    			}
    		},
    		i: function intro(local) {
    			if (current) return;
    			transition_in(metadata.$$.fragment, local);
    			transition_in(if_block);
    			current = true;
    		},
    		o: function outro(local) {
    			transition_out(metadata.$$.fragment, local);
    			transition_out(if_block);
    			current = false;
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(main);
    			destroy_component(metadata);
    			if (if_block) if_block.d();
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_fragment$4.name,
    		type: "component",
    		source: "",
    		ctx
    	});

    	return block;
    }

    function instance$4($$self, $$props, $$invalidate) {
    	let { $$slots: slots = {}, $$scope } = $$props;
    	validate_slots("App", slots, []);
    	let mounted = false;

    	onMount(async () => {
    		// This is to prevent flashing
    		$$invalidate(0, mounted = true);
    	});

    	const writable_props = [];

    	Object.keys($$props).forEach(key => {
    		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<App> was created with unknown prop '${key}'`);
    	});

    	$$self.$capture_state = () => ({ onMount, Socials: Social, Metadata, mounted });

    	$$self.$inject_state = $$props => {
    		if ("mounted" in $$props) $$invalidate(0, mounted = $$props.mounted);
    	};

    	if ($$props && "$$inject" in $$props) {
    		$$self.$inject_state($$props.$$inject);
    	}

    	return [mounted];
    }

    class App extends SvelteComponentDev {
    	constructor(options) {
    		super(options);
    		init(this, options, instance$4, create_fragment$4, safe_not_equal, {});

    		dispatch_dev("SvelteRegisterComponent", {
    			component: this,
    			tagName: "App",
    			options,
    			id: create_fragment$4.name
    		});
    	}
    }

    const app = new App({
      target: document.body,
      props: {},
    });

    return app;

}());
//# sourceMappingURL=bundle.js.map
