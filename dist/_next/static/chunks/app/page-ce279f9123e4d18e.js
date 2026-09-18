(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[974],{5665:(e,t,a)=>{"use strict";a.d(t,{BuilderShell:()=>tL});var o=a(5155),s=a(2115),r=a(2747),n=a(888),i=a(2442);let l=(0,r.F)("group/button inline-flex shrink-0 items-center justify-center rounded-lg border border-transparent bg-clip-padding text-sm font-medium whitespace-nowrap transition-all outline-none select-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 active:not-aria-[haspopup]:translate-y-px disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",{variants:{variant:{default:"bg-primary text-primary-foreground hover:bg-primary/80",outline:"border-border bg-background hover:bg-muted hover:text-foreground aria-expanded:bg-muted aria-expanded:text-foreground dark:border-input dark:bg-input/30 dark:hover:bg-input/50",secondary:"bg-secondary text-secondary-foreground hover:bg-[color-mix(in_oklch,var(--secondary),var(--foreground)_5%)] aria-expanded:bg-secondary aria-expanded:text-secondary-foreground",ghost:"hover:bg-muted hover:text-foreground aria-expanded:bg-muted aria-expanded:text-foreground dark:hover:bg-muted/50",destructive:"bg-destructive/10 text-destructive hover:bg-destructive/20 focus-visible:border-destructive/40 focus-visible:ring-destructive/20 dark:bg-destructive/20 dark:hover:bg-destructive/30 dark:focus-visible:ring-destructive/40",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-8 gap-1.5 px-2.5 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2",xs:"h-6 gap-1 rounded-[min(var(--radius-md),10px)] px-2 text-xs in-data-[slot=button-group]:rounded-lg has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 [&_svg:not([class*='size-'])]:size-3",sm:"h-7 gap-1 rounded-[min(var(--radius-md),12px)] px-2.5 text-[0.8rem] in-data-[slot=button-group]:rounded-lg has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 [&_svg:not([class*='size-'])]:size-3.5",lg:"h-9 gap-1.5 px-2.5 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2",icon:"size-8","icon-xs":"size-6 rounded-[min(var(--radius-md),10px)] in-data-[slot=button-group]:rounded-lg [&_svg:not([class*='size-'])]:size-3","icon-sm":"size-7 rounded-[min(var(--radius-md),12px)] in-data-[slot=button-group]:rounded-lg","icon-lg":"size-9"}},defaultVariants:{variant:"default",size:"default"}});function c({className:e,variant:t="default",size:a="default",asChild:s=!1,...r}){let d=s?i.bL:"button";return(0,o.jsx)(d,{"data-slot":"button","data-variant":t,"data-size":a,className:(0,n.cn)(l({variant:t,size:a,className:e})),...r})}let d={projectName:"Northstar",projectType:"dashboard",framework:"next",packageManager:"pnpm",primary:"#D7F75B",secondary:"#8CA6FF",accent:"#F5A65B",typeVoice:"instrument",headingFont:null,bodyFont:null,radius:"soft",density:"balanced",themeMode:"system",shadowStyle:"soft",motionStyle:"subtle",presetKey:"neutral-product",logoFileName:null,logoDataUrl:null},p={dashboard:"dashboard",landing:"landing page","web-app":"web app"},u={instrument:"Geist / Utility",editorial:"Newsreader / Editorial",system:"System Sans / Familiar"},m={react:{name:"shadcn/ui",cliPackage:"shadcn",primitives:"Radix primitives",docs:"https://ui.shadcn.com",registryFile:"forge-system.json"},vue:{name:"shadcn-vue",cliPackage:"shadcn-vue",primitives:"Reka UI primitives",docs:"https://www.shadcn-vue.com",registryFile:"forge-system-vue.json"},svelte:{name:"shadcn-svelte",cliPackage:"shadcn-svelte",primitives:"Bits UI primitives",docs:"https://shadcn-svelte.com",registryFile:"forge-system-svelte.json"},angular:{name:"spartan/ui",cliPackage:"@spartan-ng/cli",primitives:"spartan brain primitives",docs:"https://www.spartan.ng",registryFile:null},vanilla:{name:"Forge primitives",cliPackage:null,primitives:"hand-written elements on the token contract",docs:"https://tailwindcss.com/docs",registryFile:null}},h={react:"React",vue:"Vue",svelte:"Svelte",angular:"Angular",vanilla:"No framework"},g={next:{key:"next",label:"Next.js",family:"react",tagline:"App Router, React Server Components, and the shadcn CLI default.",stackLabel:"Next.js 16 App Router",language:"TypeScript",routing:"File routes in app/ with server components by default",layout:{styles:"app/globals.css",patternsDir:"components/patterns",patternsImport:"@/components/patterns",uiImport:"@/components/ui",uiDir:"components/ui",utils:"lib/utils.ts",utilsImport:"@/lib/utils",publicDir:"public",entry:"app/page.tsx"},devScript:"dev",devUrl:"http://localhost:3000",guardrails:['Keep server components as the default and add "use client" only where interaction or browser APIs require it.',"Colocate route-only UI in app/; anything reused belongs in components/."]},"react-vite":{key:"react-vite",label:"React + Vite",family:"react",tagline:"A single-page React app with no server runtime.",stackLabel:"React 19 with Vite",language:"TypeScript",routing:"Single entry composition; add a router when routes appear",layout:{styles:"src/index.css",patternsDir:"src/components/patterns",patternsImport:"@/components/patterns",uiImport:"@/components/ui",uiDir:"src/components/ui",utils:"src/lib/utils.ts",utilsImport:"@/lib/utils",publicDir:"public",entry:"src/App.tsx"},devScript:"dev",devUrl:"http://localhost:5173",guardrails:["There is no server runtime; fetch data from the client and model loading and error states explicitly.","Introduce a router before the first composition grows a second screen."]},"react-router":{key:"react-router",label:"React Router",family:"react",tagline:"React Router v8 framework mode with server rendering and loaders.",stackLabel:"React Router 8 framework mode",language:"TypeScript",routing:"Route modules declared in app/routes.ts with loaders and actions",layout:{styles:"app/app.css",patternsDir:"app/components/patterns",patternsImport:"~/components/patterns",uiImport:"~/components/ui",uiDir:"app/components/ui",utils:"app/lib/utils.ts",utilsImport:"~/lib/utils",publicDir:"public",entry:"app/routes/home.tsx"},devScript:"dev",devUrl:"http://localhost:5173",guardrails:["Load data in route loaders and mutate through actions rather than fetching inside components.","Register every new route in app/routes.ts; do not rely on implicit file discovery."]},"tanstack-start":{key:"tanstack-start",label:"TanStack Start",family:"react",tagline:"Type-safe file routes with server functions on Vite.",stackLabel:"TanStack Start with TanStack Router",language:"TypeScript",routing:"File routes in src/routes with a generated, type-safe route tree",layout:{styles:"src/styles/app.css",patternsDir:"src/components/patterns",patternsImport:"@/components/patterns",uiImport:"@/components/ui",uiDir:"src/components/ui",utils:"src/lib/utils.ts",utilsImport:"@/lib/utils",publicDir:"public",entry:"src/routes/index.tsx"},devScript:"dev",devUrl:"http://localhost:3000",guardrails:["Let the router generate src/routeTree.gen.ts; never edit it by hand.","Use route loaders and server functions for data instead of ad hoc effects."]},astro:{key:"astro",label:"Astro",family:"react",tagline:"Static pages with React islands for the interactive parts.",stackLabel:"Astro with React islands",language:"TypeScript",routing:"File routes in src/pages, shipped as HTML by default",layout:{styles:"src/styles/global.css",patternsDir:"src/components/patterns",patternsImport:"@/components/patterns",uiImport:"@/components/ui",uiDir:"src/components/ui",utils:"src/lib/utils.ts",utilsImport:"@/lib/utils",publicDir:"public",entry:"src/pages/index.astro"},devScript:"dev",devUrl:"http://localhost:4321",guardrails:["Keep pages static and hydrate islands with client:load, client:idle, or client:visible only where interaction is required.","Interactive patterns must live in .tsx islands; .astro files stay as composition and content."]},"vue-vite":{key:"vue-vite",label:"Vue + Vite",family:"vue",tagline:"Vue 3 single-file components with shadcn-vue and Reka UI.",stackLabel:"Vue 3 with Vite",language:"TypeScript",routing:"Single entry composition; add Vue Router when routes appear",layout:{styles:"src/assets/index.css",patternsDir:"src/components/patterns",patternsImport:"@/components/patterns",uiImport:"@/components/ui",uiDir:"src/components/ui",utils:"src/lib/utils.ts",utilsImport:"@/lib/utils",publicDir:"public",entry:"src/App.vue"},devScript:"dev",devUrl:"http://localhost:5173",guardrails:['Use <script setup lang="ts"> with typed props and defineModel for two-way bindings.',"Keep styling in Tailwind utility classes over the token contract; avoid scoped style blocks that re-declare colors."]},nuxt:{key:"nuxt",label:"Nuxt",family:"vue",tagline:"Server-rendered Vue with the shadcn-nuxt module.",stackLabel:"Nuxt 4 with the shadcn-nuxt module",language:"TypeScript",routing:"File routes in app/pages with server rendering by default",layout:{styles:"app/assets/css/main.css",patternsDir:"app/components/patterns",patternsImport:"@/components/patterns",uiImport:"@/components/ui",uiDir:"app/components/ui",utils:"app/lib/utils.ts",utilsImport:"@/lib/utils",publicDir:"public",entry:"app/pages/index.vue"},devScript:"dev",devUrl:"http://localhost:3000",guardrails:["Fetch data with useAsyncData or useFetch so it is rendered on the server, not in onMounted.","Import patterns explicitly even though Nuxt can auto-import them; the import is the documentation."]},sveltekit:{key:"sveltekit",label:"SvelteKit",family:"svelte",tagline:"Svelte 5 runes with shadcn-svelte and Bits UI.",stackLabel:"SvelteKit with Svelte 5 runes",language:"TypeScript",routing:"File routes in src/routes with +page and +layout modules",layout:{styles:"src/app.css",patternsDir:"src/lib/components/patterns",patternsImport:"$lib/components/patterns",uiImport:"$lib/components/ui",uiDir:"src/lib/components/ui",utils:"src/lib/utils.ts",utilsImport:"$lib/utils.js",publicDir:"static",entry:"src/routes/+page.svelte"},devScript:"dev",devUrl:"http://localhost:5173",guardrails:["Use runes ($state, $derived, $props) rather than legacy stores or reactive labels.","Load route data in +page.ts or +page.server.ts instead of fetching inside components."]},angular:{key:"angular",label:"Angular",family:"angular",tagline:"Standalone components and signals with spartan/ui.",stackLabel:"Angular 22 standalone components with signals",language:"TypeScript",routing:"Standalone components wired through the router in src/app/app.routes.ts",layout:{styles:"src/styles.css",patternsDir:"src/app/patterns",patternsImport:"@/patterns",uiImport:"@/components/ui",uiDir:"src/app/components/ui",utils:"src/app/lib/utils.ts",utilsImport:"@/lib/utils",publicDir:"public",entry:"src/app/app.ts"},devScript:"start",devUrl:"http://localhost:4200",guardrails:["Use standalone components, signal inputs, and OnPush change detection; the app runs zoneless.","Keep templates declarative with the built-in @if and @for blocks rather than *ngIf and *ngFor."]},vanilla:{key:"vanilla",label:"HTML + JS",family:"vanilla",tagline:"No framework: ES modules, plain DOM, and the same token contract.",stackLabel:"Vanilla HTML and JavaScript on Vite",language:"JavaScript with JSDoc types",routing:"Static .html entries at the project root",layout:{styles:"src/styles.css",patternsDir:"src/patterns",patternsImport:"./patterns/index.js",uiImport:"../ui/primitives.js",uiDir:"src/ui",utils:"src/lib/utils.js",utilsImport:"../lib/utils.js",publicDir:"public",entry:"index.html"},devScript:"dev",devUrl:"http://localhost:5173",guardrails:["Keep markup in index.html and behavior in ES modules; do not build a rendering framework by hand.","Patterns are factory functions that return DOM nodes — mount them into the elements the HTML already declares."]}},y=[{family:"react",frameworks:["next","react-vite","react-router","tanstack-start","astro"]},{family:"vue",frameworks:["vue-vite","nuxt"]},{family:"svelte",frameworks:["sveltekit"]},{family:"angular",frameworks:["angular"]},{family:"vanilla",frameworks:["vanilla"]}],f=Object.keys(g);function b(e){return m[g[e].family]}let v=[400,500,600,700],x={s:"Sans",r:"Serif",d:"Display",h:"Handwriting",m:"Mono"},w={s:'"Helvetica Neue", Arial, sans-serif',r:'Georgia, "Times New Roman", serif',d:'"Helvetica Neue", Arial, sans-serif',h:'"Segoe Script", cursive',m:'"SFMono-Regular", Consolas, monospace'},S=["Roboto|s|15","Open Sans|s|15","Google Sans|s|15","Lato|s|9","Inter|s|15","Montserrat|s|15","Roboto Condensed|s|15","Poppins|s|15","Roboto Mono|m|15","Noto Sans JP|s|15","Oswald|s|15","Noto Sans|s|15","DM Sans|s|15","Raleway|s|15","Playfair Display|r|15","Arimo|s|15","Rubik|s|15","Ubuntu|s|11","Manrope|s|15","Outfit|s|15","Kanit|s|15","Merriweather|r|15","Archivo Black|s|1","Noto Sans KR|s|15","Nunito|s|15","Work Sans|s|15","Figtree|s|15","Noto Sans TC|s|15","Nunito Sans|s|15","Source Sans 3|s|15","JetBrains Mono|m|15","Roboto Slab|r|15","Prompt|s|15","IBM Plex Sans|s|15","Inconsolata|m|15","Saira|s|15","Karla|s|15","Share Tech|s|1","Smooch Sans|s|15","Titillium Web|s|13","Heebo|s|15","Lora|r|15","Plus Jakarta Sans|s|15","Cormorant Garamond|r|15","Quicksand|s|15","Noto Sans SC|s|15","PT Sans|s|9","Libre Franklin|s|15","Google Sans Flex|s|15","Barlow Condensed|s|15","Bebas Neue|s|1","Fjalla One|s|1","Mulish|s|15","Dancing Script|h|15","Anton|s|1","Barlow|s|15","Archivo|s|15","EB Garamond|r|15","Lobster Two|d|9","Bricolage Grotesque|s|15","Public Sans|s|15","Inter Tight|s|15","Instrument Serif|r|1","Fraunces|r|15","Cairo|s|15","Jost|s|15","Lexend|s|15","Bitter|r|15","Assistant|s|15","Black Ops One|d|1","Changa One|d|1","Fira Sans|s|15","Schibsted Grotesk|s|15","Nanum Gothic|s|9","Noto Serif|r|15","Roboto Flex|s|15","Space Grotesk|s|15","Urbanist|s|15","Alfa Slab One|d|1","DM Serif Display|r|1","Libre Baskerville|r|15","Hind Siliguri|s|15","PT Serif|r|9","Overpass|s|15","Rajdhani|s|15","Instrument Sans|s|15","Lilita One|d|1","Source Code Pro|m|15","Fredoka|s|15","Exo 2|s|15","Orbitron|s|15","Source Serif 4|r|15","Noto Sans Telugu|s|15","Merriweather Sans|s|15","Oxygen|s|9","Crimson Text|r|13","Newsreader|r|15","IBM Plex Mono|m|15","Pacifico|h|1","Anek Telugu|s|15","Josefin Sans|s|15","Bungee|d|1","Barlow Semi Condensed|s|15","Noto Serif JP|r|15","Tajawal|s|11","Cinzel|r|15","Slabo 27px|r|1","PT Sans Narrow|s|9","Sora|s|15","Arvo|r|9","Comfortaa|d|15","Teko|s|15","Hanken Grotesk|s|15","Gravitas One|d|1","Mukta|s|15","Asap|s|15","Bodoni Moda|r|15","DM Mono|m|3","Abel|s|1","Maven Pro|s|15","Chakra Petch|s|15","Cabin|s|15","M PLUS 1p|s|11","Questrial|s|1","Play|s|9","Archivo Narrow|s|15","Almarai|s|9","Alumni Sans|s|15","Caveat|h|15","Abril Fatface|d|1","Albert Sans|s|15","Dosis|s|15","Indie Flower|h|1","Exo|s|15","Geist|s|15","Great Vibes|h|1","Red Hat Display|s|15","IBM Plex Serif|r|15","Onest|s|15","Spectral|r|15","IBM Plex Sans Arabic|s|15","Noto Sans Khmer|s|15","Syne|s|15","Cormorant|r|15","M PLUS Rounded 1c|s|11","Unbounded|s|15","Sanchez|r|1","Sofia Sans|s|15","Nanum Myeongjo|r|9","Epilogue|s|15","Hind|s|15","Oleo Script|d|9","Zeyada|h|1","Roboto Serif|r|15","Permanent Marker|h|1","Noto Serif TC|r|15","Saira Condensed|s|15","Noto Serif KR|r|15","Ramabhadra|s|1","Vollkorn|r|15","Noto Kufi Arabic|s|15","Amiri|r|9","Encode Sans|s|15","Noto Serif SC|r|15","Sarabun|s|15","Fira Code|m|15","Faustina|r|15","Noto Sans Devanagari|s|15","Literata|r|15","Delius|h|1","Lobster|d|1","Catamaran|s|15","Press Start 2P|d|1","Courier Prime|m|9","Fira Sans Condensed|s|15","Noto Sans Thai|s|15","Red Hat Text|s|15","Domine|r|15","Russo One|s|1","Cardo|r|9","Noto Sans Arabic|s|15","Tinos|r|9","Asap Condensed|s|15","Noto Naskh Arabic|r|15","Chivo|s|15","DM Serif Text|r|1","Bree Serif|r|1","Righteous|d|1","Shadows Into Light|h|1","Yellowtail|h|1","Geist Mono|m|15","Playfair|r|15","Baskervville|r|15","Acme|s|1","Yanone Kaffeesatz|s|15","Prata|r|1","Shippori Mincho|r|15","Space Mono|m|9","ABeeZee|s|1","Rowdies|d|9","Fugaz One|d|1","Lexend Deca|s|15","Hammersmith One|s|1","Kumbh Sans|s|15","Zilla Slab|r|15","Alegreya|r|15","Zen Kaku Gothic New|s|11","Satisfy|h|1","Tenor Sans|s|1","Cantarell|s|9","Antic Slab|r|1","Hind Madurai|s|15","PT Mono|m|1","Paytone One|s|1","Bangers|d|1","Rethink Sans|s|15","Varela Round|s|1","Be Vietnam Pro|s|15","Old Standard TT|r|9","Comic Neue|h|9","Changa|s|15","Allura|h|1","Advent Pro|s|15","VT323|m|1","Khand|s|15","League Spartan|s|15","Audiowide|d|1","Marcellus|r|1","Noticia Text|r|9","Patrick Hand|h|1","Chelsea Market|d|1","Quantico|s|9","Crete Round|r|1","STIX Two Text|r|15","Sawarabi Gothic|s|1","Atkinson Hyperlegible|s|9","Quattrocento|r|9","Sacramento|h|1","Commissioner|s|15","Geologica|s|15","Lexend Giga|s|15","Share Tech Mono|m|1","Passion One|d|9","Noto Nastaliq Urdu|r|15","Antonio|s|15","Radio Canada|s|15","Crimson Pro|r|15","Didact Gothic|s|1","Philosopher|s|9","Zen Maru Gothic|s|11","Frank Ruhl Libre|r|15","Martel|r|13","Actor|s|1","Kalam|h|9","Yantramanav|s|11","Josefin Slab|r|15","Titan One|d|1","Gruppo|s|1","Francois One|s|1","LINE Seed JP|s|9","Oxanium|d|15","Rokkitt|r|15","Noto Sans HK|s|15","Sofia Sans Condensed|s|15","Baloo 2|d|15","Signika Negative|s|15","Rock Salt|h|1","Signika|s|15","Kosugi Maru|s|1","Luckiest Guy|d|1","Noto Sans Hebrew|s|15","Architects Daughter|h|1","Neuton|r|9","Noto Sans Tamil|s|15","Bai Jamjuree|s|15","Homemade Apple|h|1","Alex Brush|h|1","Encode Sans Condensed|s|15","Andada Pro|r|15","Gabarito|d|15","Alegreya Sans|s|11","Tangerine|h|9","Jura|s|15","Quattrocento Sans|s|9","Cookie|h|1","Krub|s|15","Amaranth|s|9","Viga|s|1","M PLUS 1|s|15","Dela Gothic One|d|1","Montserrat Alternates|s|15","Forum|d|1","Golos Text|s|15","Istok Web|s|9","Rammetto One|d|1","Berkshire Swash|h|1","News Cycle|s|9","Yeseva One|d|1","Playball|d|1","Pathway Gothic One|s|1","Andika|s|9","El Messiri|s|15","Monoton|d|1","Italianno|h|1","Libre Barcode 39|d|1","Radio Canada Big|s|15","Fira Mono|m|11","Eater|d|1","Staatliches|d|1","Blinker|s|13","Gothic A1|s|15","Hind Guntur|s|15","Cinzel Decorative|d|9","Goldman|d|9","Readex Pro|s|15","Damion|h|1","Aleo|r|15","Saira Extra Condensed|s|15","Amatic SC|h|9","Caveat Brush|h|1","Google Sans Code|m|15","Alata|s|1","Nothing You Could Do|h|1","Noto Sans Display|s|15","Ubuntu Sans|s|15","Courgette|h|1","Petrona|r|15","IBM Plex Sans Condensed|s|15","Michroma|s|1","Noto Serif Bengali|r|15","Angkor|d|1","Sorts Mill Goudy|r|1","Mona Sans|s|15","Noto Sans Mono|s|15","Monda|s|15","Atkinson Hyperlegible Next|s|15","BIZ UDPGothic|s|9","Anonymous Pro|m|9","Kaushan Script|h|1","Ropa Sans|s|1","Vidaloka|r|1","Averia Serif Libre|d|9","Georama|s|15","Special Elite|d|1","Cuprum|s|15","IBM Plex Sans Thai|s|15","REM|s|15","Syncopate|s|9","Saira Semi Condensed|s|15","Mr Dafoe|h|1","Fira Sans Extra Condensed|s|15","Sawarabi Mincho|r|1","Afacad|s|15","Libre Caslon Text|r|9","Creepster|d|1","Racing Sans One|d|1","Cousine|m|9","Gloria Hallelujah|h|1","Mrs Saint Delafield|h|1","Patua One|d|1","Varela|s|1","Bad Script|h|1","Noto Serif Display|r|15","Calistoga|d|1","Funnel Sans|s|15","Reddit Sans|s|15","Secular One|s|1","Balsamiq Sans|d|9","M PLUS 2|s|15","Caprasimo|d|1","Noto Sans Bengali|s|15","IBM Plex Sans JP|s|15","Economica|s|9","Gochi Hand|h|1","Mukta Malar|s|15","Ruda|s|15","Cabin Condensed|s|15","La Belle Aurore|h|1","Squada One|d|1","Comic Relief|d|9","Sen|s|15","Sofia|h|1","Carter One|d|1","Zen Old Mincho|r|15","Potta One|d|1","Spline Sans|s|15","Martel Sans|s|13","Anek Bangla|s|15","Limelight|d|1","Alexandria|s|15","Belanosima|s|13","Knewave|d|1","League Gothic|s|1","Aboreto|d|1","PT Sans Caption|s|9","Covered By Your Grace|h|1","Pangolin|h|1","Rye|d|1","Itim|h|1","Hachi Maru Pop|h|1","Rubik Mono One|s|1","Overpass Mono|m|15","Big Shoulders|d|15","Do Hyeon|s|1","Funnel Display|d|15","Leckerli One|h|1","Akshar|s|15","Nanum Gothic Coding|h|9","Fustat|s|15","Sarala|s|9","Vazirmatn|s|15","Suez One|r|1","Grandstander|d|15","Boogaloo|d|1","Geo|s|1","Ubuntu Condensed|s|1","Cedarville Cursive|h|1","Germania One|d|1","Italiana|s|1","Unna|r|9","Palanquin Dark|s|15","Playfair Display SC|r|9","Wix Madefor Text|s|15","Tilt Warp|d|1","Khula|s|13","Sansita|s|9","Gilda Display|r|1","Shrikhand|d|1","Rufina|r|9","Fahkwang|s|15","Baloo Da 2|d|15","Ma Shan Zheng|h|1","Darker Grotesque|s|15","Nixie One|d|1","Charm|h|9","Mate|r|1","Parkinsans|s|15","Poiret One|d|1","Gloock|r|1","Gantari|s|15","Yuji Mai|r|1","Pontano Sans|s|15","Libre Barcode 128|d|1","Lustria|r|1","Noto Sans Gujarati|s|15","Reenie Beanie|h|1","Pinyon Script|h|1","UnifrakturMaguntia|d|1","Playpen Sans|h|15","Marcellus SC|r|1","Tomorrow|s|15","Fragment Mono|m|1","Libre Bodoni|r|15","Coda|d|1","Sintony|s|9","Proza Libre|s|15","Kiwi Maru|r|3","Nanum Pen Script|h|1","Arsenal|s|9","Libre Caslon Display|r|1","Chonburi|d|1","Eczar|r|15","Corben|d|9","Basic|s|1","Concert One|d|1","Oooh Baby|h|1","Abhaya Libre|r|15","BIZ UDGothic|s|9","Livvic|s|15","Noto Sans Malayalam|s|15","Radley|r|1","Chango|d|1","Red Hat Mono|m|15","Neucha|h|1","K2D|s|15","Vina Sans|d|1","Ibarra Real Nova|r|15","Mitr|s|15","IBM Plex Sans KR|s|15","Judson|r|9","Trirong|r|15","Gelasio|r|15","Tektur|d|15","Abyssinica SIL|r|1","Merienda|h|15","Noto Sans Georgian|s|15","Glegoo|r|9","Yatra One|d|1","Pixelify Sans|d|15","Bowlby One|d|1","Lusitana|r|9","PT Serif Caption|r|1","Castoro|r|1","Armata|s|1","Biryani|s|13","Caudex|r|9","Cutive Mono|m|1","Young Serif|r|1","Dawning of a New Day|h|1","Noto Sans Myanmar|s|15","Tiro Bangla|r|1","Graduate|r|1","Azeret Mono|m|15","Carlito|s|9","Pattaya|s|1","Lalezar|s|1","Share|s|9","Alef|s|9","Cantata One|r|1","Jua|s|1","Herr Von Muellerhoff|h|1","Ubuntu Mono|m|9","ZCOOL XiaoWei|s|1","Podkova|r|15","Volkhov|r|9","Athiti|s|15","Metrophobic|s|1","Bellefair|r|1","Lateef|r|15","Parisienne|h|1","Enriqueta|r|15","Handlee|h|1","Nova Square|d|1","Sriracha|h|1","Petit Formal Script|h|1","Unica One|d|1","AR One Sans|s|15","Cormorant Infant|r|15","Noto Sans Kannada|s|15","TikTok Sans|s|15","Averia Libre|d|9","GFS Didot|r|1","Laila|r|15","Noto Sans Gurmukhi|s|15","Cormorant Upright|r|15","Belleza|s|1","Spinnaker|s|1","Chiron GoRound TC|s|15","Black Han Sans|s|1","Norican|h|1","Zalando Sans|s|15","Lexend Peta|s|15","Nanum Brush Script|h|1","Allison|h|1","Telex|s|1","Hind Vadodara|s|15","Libre Barcode 39 Text|d|1","Glory|s|15","Bentham|r|1","Host Grotesk|s|15","Hina Mincho|r|1","Lexend Zetta|s|15","Karma|r|15","Klee One|h|5","Nobile|s|11","BIZ UDPMincho|r|9","Besley|r|15","Koulen|d|1","Gaegu|h|9","Pathway Extreme|s|15","Special Gothic|s|15","Corinthia|h|9","Ms Madi|h|1","BioRhyme|r|15","Mouse Memoirs|s|1","Schoolbell|h|1","Markazi Text|r|15","Sometype Mono|m|15","Anton SC|s|1","Amiko|s|13","Calligraffitti|h|1","Rampart One|d|1","Average Sans|s|1","Sofia Sans Extra Condensed|s|15","Alice|r|1","Fjord One|r|1","Arapey|r|1","Sniglet|d|1","Pragati Narrow|s|9","Special Gothic Condensed One|s|1","Monomaniac One|s|1","Julius Sans One|s|1","ZCOOL KuaiLe|s|1","Alatsi|s|1","Mada|s|15","Inria Sans|s|9","Zen Kaku Gothic Antique|s|11","Recursive|s|15","Skranji|d|9","Amita|h|9","Kodchasan|s|15","IM Fell English SC|r|1","Gudea|s|9","Noto Serif Georgian|r|15","Ledger|r|1","Meow Script|h|1","Sedgwick Ave Display|h|1","Shippori Mincho B1|r|15","Allerta|s|1","Dongle|s|9","Overlock|d|9","Familjen Grotesk|s|15","Tilt Neon|d|1","Pridi|r|15","Waiting for the Sunrise|h|1","Cormorant Unicase|r|15","Reem Kufi|s|15","Monsieur La Doulaise|h|1","Oxygen Mono|m|1","Shantell Sans|d|15","Taviraj|r|15","Kaisei Decol|r|11","Over the Rainbow|h|1","Flow Circular|d|1","Bubblegum Sans|d|1","Love Ya Like A Sister|d|1","Ultra|r|1","Encode Sans Expanded|s|15","Major Mono Display|m|1","Six Caps|s|1","Marck Script|h|1","Megrim|d|1","Wix Madefor Display|s|15","Yesteryear|h|1","Metamorphous|d|1","Pirata One|d|1","Meddon|h|1","Croissant One|d|1","Lemonada|d|15","Magra|s|9","Poetsen One|d|1","Palanquin|s|15","Syne Mono|m|1","Faster One|d|1","Just Another Hand|h|1","Kelly Slab|d|1","Red Rose|d|15","Alegreya Sans SC|s|11","Kantumruy Pro|s|15","Libertinus Serif|r|13","IBM Plex Sans Hebrew|s|15","Murecho|s|15","Quintessential|h|1","Grenze Gotisch|d|15","Niramit|s|15","Zen Kurenaido|s|1","Londrina Solid|d|1","Noto Sans Thai Looped|s|15","Zen Antique|r|1","Akatab|s|15","Bayon|s|1","Baloo Thambi 2|d|15","MedievalSharp|d|1","Hurricane|h|1","Rozha One|r|1","David Libre|r|11","Cambay|s|9","MuseoModerno|d|15","Turret Road|d|11","Carrois Gothic|s|1","Agbalumo|d|1","Inknut Antiqua|r|15","Noto Sans Symbols|s|15","Voltaire|s|1","Scada|s|9","Poller One|d|1","Gotu|s|1","Special Gothic Expanded One|s|1","KoHo|s|15","B612 Mono|m|9","Baloo Bhai 2|d|15","Bowlby One SC|d|1","Bungee Inline|d|1","Mandali|s|1","Manjari|s|9","Beth Ellen|h|1","Bevan|r|1","Adamina|r|1","Rubik Dirt|d|1","Rochester|h|1","Libre Barcode 39 Extended|d|1","Bungee Spice|d|1","Chewy|d|1","Hanuman|r|15","Elsie|d|1","Kaisei Opti|r|11","Slackey|d|1","Bungee Shade|d|1","Miriam Libre|s|15","Mukta Mahee|s|15","Qwigley|h|1","Averia Sans Libre|d|9","Noto Sans Warang Citi|s|1","Mali|h|15","Rambla|s|9","Average|r|1","Stardos Stencil|d|9","Gurajada|s|1","Kreon|r|15","Mansalva|h|1","Baloo Bhaijaan 2|d|15","Spectral SC|r|15","Ruslan Display|d|1","SUSE|s|15","Gluten|d|15","IM Fell English|r|1","Inder|s|1","Aldrich|s|1","Doppio One|s|1","Jomhuria|d|1","Days One|s|1","Slabo 13px|r|1","B612|s|9","Moon Dance|h|1","Padauk|s|9","Cherry Bomb One|d|1","Vast Shadow|r|1","Kurale|r|1","Contrail One|d|1","Zain|s|9","Oleo Script Swash Caps|d|9","Sunflower|s|10","Yrsa|r|15","Cabin Sketch|d|9","Trispace|s|15","Capriola|s|1","BenchNine|s|9","Whisper|h|1","Piazzolla|r|15","Jaldi|s|9","Krona One|s|1","Niconne|h|1","Thasadith|s|9","Encode Sans Semi Expanded|s|15","Ovo|r|1","Sedgwick Ave|h|1","Sarina|d|1","Vesper Libre|r|11","Noto Serif Khojki|r|15","Fredericka the Great|d|1","Mr De Haviland|h|1","UnifrakturCook|d|8","Puritan|s|9","Lacquer|d|1","Alike|r|1","Barriecito|d|1","Allan|d|9","Reddit Sans Condensed|s|15","Afacad Flux|s|15","Euphoria Script|h|1","Metal Mania|d|1","Noto Sans Ethiopic|s|15","Shadows Into Light Two|h|1","Raleway Dots|d|1","Anek Latin|s|15","Montez|h|1","Charis SIL|r|9","Oregano|d|1","Prosto One|d|1","Alike Angular|r|1","Brawler|r|9","Quando|r|1","Qwitcher Grypen|h|9","League Script|h|1","Nata Sans|s|15","Noto Sans Sinhala|s|15","Patrick Hand SC|h|1","Freehand|d|1","Tenali Ramakrishna|s|1","Borel|h|1","Zen Antique Soft|r|1","Jersey 25|d|1","MonteCarlo|h|1","Shojumaru|d|1","Fuggles|h|1","Gowun Batang|r|9","Vollkorn SC|r|13","Finger Paint|d|1","Kalnia|r|15","Redressed|h|1","Noto Sans Meetei Mayek|s|15","Rubik Glitch|d|1","Chivo Mono|m|15","Stick No Bills|s|15","Anuphan|s|15","Prociono|r|1","Protest Revolution|d|1","Bakbak One|d|1","Tienne|r|9","Cambo|r|1","Scope One|r|1","Cherry Cream Soda|d|1","Aclonica|s|1","Molengo|s|1","Unkempt|d|9","Modak|d|1","Gulzar|r|1","BhuTuka Expanded One|r|1","Suranna|r|1","Electrolize|s|1","Kranky|d|1","Kosugi|s|1","The Girl Next Door|h|1","Train One|d|1","Federo|s|1","Anta|s|1","Ruwudu|r|15","Carattere|h|1","Inria Serif|r|9","Mallanna|s|1","Trade Winds|d|1","Freeman|d|1","Imprima|s|1","The Nautigal|h|9","Sansation|s|9","Wire One|s|1","Licorice|h|1","Sail|d|1","Artifika|r|1","Kameron|r|15","Sunshiney|h|1","Hepta Slab|r|15","Iceberg|d|1","DotGothic16|s|1","Shippori Antique|s|1","Antic|s|1","IM Fell French Canon|r|1","Candal|s|1","Henny Penny|d|1","Frijole|d|1","Oranienbaum|r|1","IM Fell Double Pica|r|1","Galindo|d|1","Cal Sans|s|1","Port Lligat Sans|s|1","Luxurious Script|h|1","Style Script|h|1","Cairo Play|s|15","Brygada 1918|r|15","Noto Sans Sundanese|s|15","Sofia Sans Semi Condensed|s|15","TASA Orbiter|s|15","Bona Nova SC|r|9","Mohave|s|15","Anaheim|s|15","Original Surfer|d|1","IM Fell Great Primer|r|1","Lexend Exa|s|15","Fresca|s|1","IBM Plex Sans Thai Looped|s|15","Zalando Sans Expanded|s|15","Noto Serif HK|r|15","Asta Sans|s|15","Spline Sans Mono|m|15","Arbutus Slab|r|1","Rationale|s|1","Duru Sans|s|1","Bellota|d|9","Spicy Rice|d|1","Grand Hotel|h|1","Manuale|r|15","Grenze|r|15","Antic Didone|r|1","Imbue|r|15","Atomic Age|d|1","Gugi|d|1","Seaweed Script|d|1","Caladea|r|9","Loved by the King|h|1","Faculty Glyphic|s|1","Tiro Devanagari Hindi|r|1","Montagu Slab|r|15","Nokora|s|15","Clicker Script|h|1","Swanky and Moo Moo|h|1","Long Cang|h|1","Rakkas|d|1","Mooli|s|1","ADLaM Display|d|1","Kaisei Tokumin|r|11","Viaoda Libre|d|1","Ranchers|d|1","Karantina|d|9","Nova Round|d|1","Doto|s|15","Marvel|s|9","Science Gothic|s|15","Gasoek One|s|1","Rancho|h|1","Allerta Stencil|s|1","Amethysta|r|1","Emilys Candy|d|1","Cormorant SC|r|15","Gentium Book Plus|r|9","Smythe|d|1","NTR|s|1","Birthstone Bounce|h|3","Headland One|r|1","Dokdo|d|1","Varta|s|15","Zhi Mang Xing|h|1","Chicle|d|1","Coming Soon|h|1","Harmattan|s|15","Bitcount Single|d|15","Montaga|r|1","Comme|s|15","Mina|s|9","Jaro|s|1","Vujahday Script|h|1","Stack Sans Text|s|15","M PLUS 1 Code|m|15","Fenix|r|1","Rubik Spray Paint|d|1","Kdam Thmor Pro|s|1","Silkscreen|d|9","Alegreya SC|r|11","Momo Trust Sans|s|15","Voces|s|1","Gayathri|s|9","Wallpoet|d|1","Badeen Display|d|1","BIZ UDMincho|r|9","Sigmar One|d|1","Alkalami|r|1","Rosario|s|15","Idiqlat|r|1","Halant|r|15","Lovers Quarrel|h|1","Lavishly Yours|h|1","Mynerve|h|1","Hahmlet|r|15","Homenaje|s|1","Convergence|s|1","Marmelad|s|1","Galada|d|1","Goudy Bookletter 1911|r|1","DynaPuff|d|15","Geom|s|15","Irish Grover|d|1","Peralta|r|1","Asset|d|1","Gabriela|r|1","Delius Swash Caps|h|1","Lemon|d|1","Nova Oval|d|1","Kristi|h|1","Mea Culpa|h|1","Engagement|h|1","Kode Mono|m|15","IBM Plex Sans Devanagari|s|15","Baloo Bhaina 2|d|15","Mochiy Pop One|s|1","Noto Sans Bhaiksuki|s|1","Mozilla Headline|s|15","Carme|s|1","Noto Sans Oriya|s|15","Gemunu Libre|s|15","Anek Tamil|s|15","Arizonia|h|1","Strait|s|1","Habibi|r|1","Ysabeau|s|15","Annie Use Your Telescope|h|1","Redacted|d|1","Girassol|d|1","Miltonian|d|1","Imperial Script|h|1","Rouge Script|h|1","Amiri Quran|r|1","Fondamento|h|1","Donegal One|r|1","Kapakana|h|1","Solitreo|h|1","Baskervville SC|r|15","Elms Sans|s|15","Chau Philomene One|s|1","LXGW WenKai TC|h|9","Belgrano|r|1","Lekton|m|9","Ceviche One|d|1","RocknRoll One|s|1","Akronim|d|1","Anybody|d|15","Londrina Outline|d|1","Macondo|d|1","Nova Cut|d|1","IM Fell Great Primer SC|r|1","Pompiere|d|1","Timmana|s|1","Marhey|d|15","Dangrek|d|1","Sevillana|d|1","Yusei Magic|s|1","Cherry Swash|d|9","Akaya Kanadaka|d|1","Mountains of Christmas|d|9","Fanwood Text|r|1","Noto Sans Samaritan|s|1","Noto Music|s|1","Tauri|s|1","Trocchi|r|1","Miltonian Tattoo|d|1","Zen Dots|d|1","Chocolate Classical Sans|s|1","Sigmar|d|1","Tillana|d|15","Stalemate|h|1","Erica One|d|1","Unlock|d|1","Freckle Face|d|1","Hi Melody|h|1","Water Brush|h|1","Barrio|d|1","Noto Serif Devanagari|r|15","Hedvig Letters Sans|s|1","Stint Ultra Condensed|r|1","Pavanam|s|1","Gowun Dodum|s|1","Sree Krushnadevaraya|r|1","Zilla Slab Highlight|r|9","Asul|r|9","Edu NSW ACT Cursive|h|15","Margarine|d|1","Sura|r|9","Ballet|h|1","Liter|s|1","Fascinate|d|1","Mystery Quest|d|1","Nova Script|d|1","Rubik Doodle Shadow|d|1","Stylish|s|1","Cantora One|s|1","Maitree|r|15","Yeon Sung|d|1","Stint Ultra Expanded|r|1","Bilbo|h|1","Platypi|r|15","Akaya Telivigala|d|1","Lexend Mega|s|15","Carrois Gothic SC|s|1","Noto Serif Thai|r|15","Katibeh|d|1","Fascinate Inline|d|1","Inclusive Sans|s|15","National Park|s|15","Benne|r|1","Shippori Antique B1|s|1","Yuji Syuku|r|1","Copse|r|1","Passions Conflict|h|1","Hedvig Letters Serif|r|1","Noto Serif Hebrew|r|15","Jacques Francois|r|1","Nova Mono|m|1","Island Moments|h|1","Zen Tokyo Zoo|d|1","Suwannaphum|r|9","Dekko|h|1","Birthstone|h|1","Simonetta|d|1","Griffy|d|1","Noto Sans Tagalog|s|1","Risque|d|1","Noto Sans Tai Viet|s|1","Bellota Text|d|9","Noto Serif Tamil|r|15","Geostar Fill|d|1","McLaren|d|1","Romanesco|h|1","Sansita Swashed|d|15","Offside|d|1","SN Pro|s|15","Akt|s|15","Short Stack|h|1","Ancizar Serif|r|15","Anek Devanagari|s|15","Atkinson Hyperlegible Mono|s|15","Fuzzy Bubbles|h|9","Almendra|r|9","Jim Nightshade|h|1","Story Script|s|1","Baloo Tamma 2|d|15","Tourney|d|15","Handjet|d|15","Encode Sans Semi Condensed|s|15","Noto Serif Telugu|r|15","Rubik Scribble|d|1","Zalando Sans SemiExpanded|s|15","Bruno Ace SC|d|1","Happy Monkey|d|1","Manufacturing Consent|d|1","Scheherazade New|r|15","Caramel|h|1","Jacquard 12|d|1","Vend Sans|s|15","ZCOOL QingKe HuangYou|s|1","Linden Hill|r|1","Poor Story|d|1","Fasthand|d|1","Gwendolyn|h|9","Aref Ruqaa|r|9","Elsie Swash Caps|d|1","Inika|r|9","Mukta Vaani|s|15","Seymour One|s|1","Beiruti|s|15","Crafty Girls|h|1","Montserrat Underline|s|15","Sahitya|r|9","Anek Odia|s|15","Butterfly Kids|h|1","Spirax|d|1","Underdog|d|1","Noto Sans Buhid|s|1","Farro|s|11","Ysabeau Infant|s|15","Noto Sans Canadian Aboriginal|s|15","Fauna One|r|1","Orbit|s|1","Square Peg|h|1","Edu AU VIC WA NT Hand|h|15","Glass Antiqua|d|1","Autour One|d|1","Wittgenstein|r|15","Xanh Mono|m|1","Ruluko|s|1","Rubik Moonrocks|d|1","Boldonse|d|1","Castoro Titling|d|1","Send Flowers|h|1","Martian Mono|m|15","New Tegomin|r|1","Farsan|d|1","IM Fell DW Pica|r|1","Tiro Devanagari Marathi|r|1","Mogra|d|1","Jacques Francois Shadow|d|1","Inspiration|h|1","Noto Sans Ol Chiki|s|15","Uchen|r|1","Kite One|s|1","Noto Sans Gothic|s|1","Chathura|s|9","Aguafina Script|h|1","Festive|h|1","Battambang|d|9","Oi|d|1","Big Shoulders Stencil|d|15","Solway|r|11","Nuosu SIL|s|1","Asar|r|1","Praise|h|1","Ewert|d|1","Give You Glory|h|1","Momo Signature|s|1","Vibur|h|1","Plaster|d|1","Poly|r|1","Diplomata|d|1","Sue Ellen Francisco|h|1","Kadwa|r|9","Marko One|r|1","Luxurious Roman|d|1","Noto Sans Symbols 2|s|1","Rubik Iso|d|1","Tiro Tamil|r|1","Gideon Roman|d|1","Noto Sans Thaana|s|15","Alumni Sans Inline One|d|1","Grape Nuts|h|1","Ephesis|h|1","Sirin Stencil|d|1","Princess Sofia|h|1","Odor Mean Chey|r|1","Babylonica|h|1","Reem Kufi Ink|s|1","Noto Serif Khmer|r|15","Noto Sans Lao|s|15","SUSE Mono|s|15","Miss Fajardose|h|1","WDXL Lubrifont JP N|s|1","Coustard|r|1","Sixtyfour|m|1","Noto Sans Osmanya|s|1","Anek Gurmukhi|s|15","Sofadi One|d|1","Noto Rashi Hebrew|r|15","Meera Inimai|s|1","Joti One|d|1","Lakki Reddy|h|1","Codystar|d|1","Intel One Mono|m|15","Aref Ruqaa Ink|r|9","Coiny|d|1","Jersey 15|d|1","Rubik Distressed|d|1","Peddana|r|1","Londrina Sketch|d|1","Dhurjati|s|1","Fontdiner Swanky|d|1","Bonbon|h|1","Balthazar|r|1","Noto Sans Javanese|s|15","Arsenal SC|s|9","Della Respira|r|1","Ribeye Marrow|d|1","Alyamama|r|15","Jockey One|s|1","Felipa|h|1","Numans|s|1","Noto Sans Sora Sompeng|s|15","Updock|h|1","Amarante|d|1","Ojuju|s|15","Bacasime Antique|r|1","Passero One|d|1","Neonderthaw|h|1","Chela One|d|1","Cutive|r|1","Teachers|s|15","Buenard|r|15","Micro 5|d|1","Revalia|d|1","Walter Turncoat|h|1","Tiro Kannada|r|1","Syne Tactile|d|1","Arima|d|15","Ubuntu Sans Mono|m|15","Diplomata SC|d|1","Amarna|s|15","Snippet|s|1","Mr Bedfort|h|1","Supermercado One|d|1","Jacquarda Bastarda 9|d|1","Grey Qo|h|1","Ancizar Sans|s|15","Gidugu|s|1","Bilbo Swash Caps|h|1","Preahvihear|s|1","Expletus Sans|d|15","Purple Purse|d|1","Shizuru|d|1","Noto Sans Adlam|s|15","Noto Sans Armenian|s|15","Jersey 20|d|1","Bahiana|d|1","Kings|h|1","Foldit|d|15","Diphylleia|r|1","Lancelot|d|1","Edu VIC WA NT Beginner|h|15","Rasa|r|15","Noto Serif Dives Akuru|r|1","Slackside One|h|1","Kolker Brush|h|1","Ranga|d|9","Cossette Titre|s|9","BioRhyme Expanded|r|9","New Rocker|d|1","Gidole|s|1","Cause|h|15","Dynalight|d|1","Valley Sans|s|15","Sedan|r|1","Rosarivo|r|1","Sedan SC|r|1","Rhodium Libre|r|1","Charmonman|h|9","Cherish|h|1","Konkhmer Sleokchher|d|1","Iansui|h|1","Noto Sans Shavian|s|1","Estedad|s|15","Geist Pixel|d|1","Love Light|h|1","Hanalei Fill|d|1","Noto Sans Vithkuqi|s|15","Atma|d|15","Menbere|s|15","Flow Rounded|d|1","Orienta|s|1","Gupter|r|11","Langar|d|1","Mirza|r|15","Sixtyfour Convergence|m|1","Alkatra|d|15","Cascadia Mono|s|15","Gamja Flower|h|1","Noto Sans Pahawh Hmong|s|1","Aladin|d|1","Rubik Burned|d|1","Kufam|s|15","Noto Serif Ethiopic|r|15","Bagel Fat One|d|1","Flow Block|d|1","Splash|h|1","Matemasie|s|1","Estonia|h|1","Sarpanch|s|15","Blaka|d|1","Noto Sans Cherokee|s|15","Rubik Microbe|d|1","Libre Barcode 39 Extended Text|d|1","Triodion|d|1","Noto Sans Sunuwar|s|1","Noto Sans NKo|s|1","Orelega One|d|1","Black And White Picture|d|1","Sulphur Point|s|9","Rubik Vinyl|d|1","Noto Sans Takri|s|1","Noto Serif Vithkuqi|r|15","Bitcount Grid Single|d|15","Moul|d|1","Geostar|d|1","Narnoor|s|15","Rubik Glitch Pop|d|1","Nosifer|d|1","Noto Sans Cypro Minoan|s|1","Kalnia Glaze|d|15","Noto Sans Old Permic|s|1","Are You Serious|h|1","WindSong|h|3","Noto Sans Kaithi|s|1","Ga Maamli|d|1","Road Rage|d|1","Rubik 80s Fade|d|1","Epunda Slab|r|15","Wendy One|s|1","Protest Strike|d|1","Phudu|d|15","Rubik Beastly|d|1","Anek Malayalam|s|15","Edu AU VIC WA NT Dots|h|15","Bigshot One|d|1","Redacted Script|d|9","Moo Lah Lah|d|1","Lumanosimo|h|1","Tiny5|s|1","Kablammo|d|1","Libertinus Mono|m|1","Noto Sans Balinese|s|15","Sassy Frass|h|1","Song Myung|r|1","Tai Heritage Pro|r|9","Aoboshi One|r|1","Sour Gummy|s|15","Taprom|d|1","Arya|s|9","Noto Sans Nag Mundari|s|15","Rubik Marker Hatch|d|1","Noto Sans Coptic|s|1","Noto Sans Yi|s|1","Sancreek|d|1","Coral Pixels|d|1","Salsa|d|1","Combo|d|1","Reddit Mono|m|15","Lilex|m|15","Ysabeau Office|s|15","Labrada|r|15","Asimovian|s|1","Qahiri|s|1","Annapurna SIL|r|9","Edu SA Beginner|h|15","Edu AU VIC WA NT Guides|h|15","Libertinus Sans|s|9","Life Savers|d|9","Noto Serif Balinese|r|1","Reggae One|d|1","Just Me Again Down Here|h|1","Noto Sans Carian|s|1","Darumadrop One|d|1","Noto Sans Syriac|s|15","Eagle Lake|h|1","Delicious Handrawn|h|1","Rubik Pixels|d|1","Gajraj One|d|1","Noto Serif Tangut|r|1","Scoutie Sans|s|15","M PLUS U|s|15","Goblin One|d|1","Grandiflora One|r|1","Noto Sans Runic|s|1","Noto Sans Grantha|s|1","Bona Nova|r|9","Palette Mosaic|d|1","Bubbler One|s|1","Modern Antiqua|d|1","Holtwood One SC|r|1","Noto Serif Dogra|r|1","Medula One|d|1","Noto Sans Old Italic|s|1","Julee|h|1","Meie Script|h|1","Baloo Paaji 2|d|15","Noto Sans Egyptian Hieroglyphs|s|1","Bytesized|s|1","Finlandica Headline|s|15","Poltawski Nowy|r|15","Chokokutai|d|1","Momo Trust Display|s|1","Playpen Sans Thai|h|15","Baumans|d|1","Edu QLD Beginner|h|15","Datatype|m|15","Vampiro One|d|1","Puppies Play|h|1","Edu SA Hand|h|15","Protest Riot|d|1","Noto Sans Old Hungarian|s|1","Noto Sans Tifinagh|s|1","Madimi One|s|1","Noto Serif Gurmukhi|r|15","Hind Mysuru|s|15","Waterfall|h|1","Noto Sans Bamum|s|15","Maiden Orange|r|1","Namdhinggo|r|15","Mako|s|1","Noto Sans Miao|s|1","Baloo Chettan 2|d|15","Noto Sans Khojki|s|1","Sirivennela|s|1","Lily Script One|d|1","Noto Sans Avestan|s|1","Noto Sans Cuneiform|s|1","Noto Serif NP Hmong|r|15","Hanalei|d|1","Mochiy Pop P One|s|1","Monofett|m|1","Noto Sans Tagbanwa|s|1","Rubik Maze|d|1","Shanti|s|1","Noto Sans Syriac Eastern|s|15","Noto Traditional Nushu|s|15","Sumana|r|9","Yuyu Short|h|1","Odibee Sans|d|1","Yuyu|h|1","Uncial Antiqua|d|1","Noto Znamenny Musical Notation|s|1","Alan Sans|s|15","Rubik Storm|d|1","Noto Sans Lydian|s|1","Ribeye|d|1","Noto Sans Cham|s|15","Smooch|h|1","Tuffy|s|9","Bpmf Zihi Kai Std|s|1","Nova Flat|d|1","Bitcount Prop Double Ink|d|15","Victor Mono|m|15","Mingzat|s|1","Iceland|d|1","Noto Sans Lisu|s|15","Crushed|d|1","Noto Sans Nabataean|s|1","BJCree|r|15","Jersey 10|d|1","Noto Serif Makasar|r|1","Blaka Hollow|d|1","Blaka Ink|d|1","Esteban|r|1","Libre Barcode 128 Text|d|1","Noto Sans Palmyrene|s|1","Noto Serif Ottoman Siyaq|r|1","Noto Serif Khitan Small Script|r|1","Yuji Hentaigana Akari|h|1","Noto Sans Elbasan|s|1","Huninn|s|1","Noto Sans Deseret|s|1","Noto Serif Hentaigana|r|15","Noto Sans Mahajani|s|1","Bonheur Royale|h|1","Noto Sans Old Persian|s|1","Kavoon|d|1","Noto Sans Newa|s|1","Noto Sans Zanabazar Square|s|1","Maname|r|1","Bitcount Prop Double|d|15","Noto Sans Siddham|s|1","Ysabeau SC|s|15","Edu VIC WA NT Hand|h|15","Noto Sans NKo Unjoined|s|15","Libertinus Keyboard|d|1","Jacquard 12 Charted|d|1","Noto Sans Tai Tham|s|15","Noto Sans Inscriptional Parthian|s|1","Noto Sans Old North Arabian|s|1","Noto Serif Old Uyghur|r|1","Edu NSW ACT Hand Pre|h|15","Gafata|s|1","Noto Sans SignWriting|s|1","Jersey 10 Charted|d|1","Bitcount Single Ink|d|15","Noto Sans Chakma|s|1","Noto Sans Old South Arabian|s|1","Noto Sans Phoenician|s|1","Stick|s|1","Bitcount Prop Single Ink|d|15","Noto Sans Caucasian Albanian|s|1","Noto Sans Sogdian|s|1","Englebert|s|1","Jacquard 24 Charted|d|1","Betania Patmos In|h|1","Jersey 15 Charted|d|1","IM Fell DW Pica SC|r|1","Noto Sans Linear B|s|1","Edu TAS Beginner|h|15","Overlock SC|d|1","Edu VIC WA NT Hand Pre|h|15","Honk|d|1","Noto Sans Masaram Gondi|s|1","Micro 5 Charted|d|1","Rubik Bubbles|d|1","Noto Sans New Tai Lue|s|15","Liu Jian Mao Cao|h|1","Noto Sans Rejang|s|1","Bitcount Ink|d|15","Bokor|d|1","Noto Sans Tamil Supplement|s|1","Noto Sans Mro|s|1","Baloo Tammudu 2|d|15","Denk One|s|1","Noto Sans Psalter Pahlavi|s|1","Betania Patmos In GDL|h|1","Yomogi|h|1","Noto Sans Tirhuta|s|1","Jersey 25 Charted|d|1","Yuji Hentaigana Akebono|h|1","Kotta One|r|1","Noto Sans Syriac Western|s|15","Anek Kannada|s|15","Noto Sans PhagsPa|s|1","Jersey 20 Charted|d|1","Junge|r|1","Noto Sans Ogham|s|1","Cascadia Code|s|15","Dorsa|s|1","Noto Sans Lepcha|s|1","Noto Sans Old Sogdian|s|1","Jacquarda Bastarda 9 Charted|d|1","Macondo Swash Caps|d|1","Noto Sans Chorasmian|s|1","Noto Sans Manichaean|s|1","Truculenta|s|15","Noto Sans Modi|s|1","Noto Sans Saurashtra|s|1","Delius Unicase|h|9","Mozilla Text|s|15","Genos|s|15","Noto Sans Kayah Li|s|15","IM Fell Double Pica SC|r|1","Jolly Lodger|d|1","Yarndings 12 Charted|d|1","Miniver|d|1","Yarndings 20|d|1","Bodoni Moda SC|r|15","Anek Gujarati|s|15","Moderustic|s|15","Pliant|s|15","Gorditas|d|9","Kenia|d|1","East Sea Dokdo|h|1","IM Fell French Canon SC|r|1","Kulim Park|s|13","Nova Slim|d|1","Kavivanar|h|1","Noto Serif Malayalam|r|15","Hubot Sans|s|15","Caesar Dressing|d|1","Beau Rivage|h|1","Bruno Ace|d|1","Agdasima|s|9","Tiro Devanagari Sanskrit|r|1","Stack Sans Headline|s|15","Cactus Classical Serif|r|1","Astloch|d|9","Mate SC|r|1","Bitcount Grid Double|d|15","Jomolhari|r|1","Port Lligat Slab|r|1","Srisakdi|d|9","Devonshire|h|1","Sekuya|d|1","New Amsterdam|s|1","BBH Bartle|s|1","Ruthie|h|1","Noto Serif Kannada|r|15","Sonsie One|d|1","Nerko One|h|1","Single Day|d|1","Joan|r|1","Smokum|d|1","Gentium Plus|r|9","Cagliostro|s|1","Londrina Shadow|d|1","Comforter|h|1","Cute Font|d|1","Lexend Tera|s|15","Arbutus|r|1","Rum Raisin|s|1","Averia Gruesa Libre|d|1","Chilanka|h|1","Noto Serif Ahom|r|1","Text Me One|s|1","Kaisei HarunoUmi|r|11","Climate Crisis|d|1","Tiro Gurmukhi|r|1","Tac One|s|1","Stack Sans Notch|s|15","Stoke|r|1","Sono|s|15","Braah One|s|1","Flamenco|d|1","Condiment|h|1","Notable|s|1","Paprika|d|1","Bungee Hairline|d|1","Yaldevi|s|15","Nabla|d|1","Texturina|r|15","Lugrasimo|h|1","Noto Serif Lao|r|15","Ramaraja|r|1","Keania One|d|1","Vibes|d|1","Encode Sans SC|s|15","Noto Sans Linear A|s|1","Playpen Sans Arabic|h|15","Rubik Wet Paint|d|1","Winky Sans|s|15","Yuji Boku|r|1","Kumar One|d|1","Shalimar|h|1","Noto Serif Armenian|r|15","Tulpen One|d|1","Monomakh|d|1","Comforter Brush|h|1","Milonga|d|1","Federant|d|1","Libre Barcode EAN13 Text|d|1","Koh Santepheap|r|9","Piedra|d|1","Fruktur|d|1","Alumni Sans Pinstripe|s|1","Noto Sans Vai|s|1","Bitcount Prop Single|d|15","Bungee Tint|d|1","Edu NSW ACT Foundation|h|15","Almendra SC|r|1","Ravi Prakash|d|1","Trykker|r|1","Emblema One|d|1","Fleur De Leah|h|1","Chiron Sung HK|r|15","Noto Sans Mende Kikakui|s|1","Reem Kufi Fun|s|15","Tilt Prism|d|1","Almendra Display|d|1","Dai Banna SIL|r|15","LXGW WenKai Mono TC|m|9","Dr Sugiyama|h|1","My Soul|h|1","Buda|d|1","Metal|d|1","Wellfleet|r|1","Noto Serif Sinhala|r|15","Noto Sans Lao Looped|s|15","Hubballi|s|1","Galdeano|s|1","Noto Sans Nandinagari|s|1","Butcherman|d|1","Bungee Outline|d|1","Noto Serif Gujarati|r|15","Playpen Sans Hebrew|h|15","Stalinist One|d|1","Bigelow Rules|d|1","WDXL Lubrifont SC|s|1","Noto Serif Tibetan|r|15","Chiron Hei HK|s|15","Epunda Sans|s|15","Kirang Haerang|d|1","Noto Sans Anatolian Hieroglyphs|s|1","Noto Sans Glagolitic|s|1","Kedebideri|s|15","TASA Explorer|s|15","GFS Neohellenic|s|9","BBH Hegarty|s|1","Noto Sans Tangsa|s|15","Workbench|m|1","Aubrey|d|1","Twinkle Star|h|1","Cossette Texte|s|9","Tiro Telugu|r|1","Alumni Sans Collegiate One|s|1","Molle|h|1","Lunasima|s|9","Oldenburg|d|1","Flavors|d|1","Iosevka Charon|m|11","Kumar One Outline|d|1","Alien Block|d|1","Gveret Levin|h|1","Noto Sans Marchen|s|1","Mrs Sheppards|h|1","Moulpali|s|1","Tsukimi Rounded|s|15","Zen Loop|d|1","Danfo|r|1","Explora|h|1","Protest Guerrilla|d|1","Noto Sans Multani|s|1","Alumni Sans SC|s|15","Rubik Puddles|d|1","Trochut|d|9","Jacquard 24|d|1","Rubik Gemstones|d|1","Rock 3D|d|1","Noto Sans Batak|s|1","Noto Sans Pau Cin Hau|s|1","Finlandica Text|s|15","Tapestry|h|1","Noto Sans Hanunoo|s|1","Big Shoulders Inline|d|15","WDXL Lubrifont TC|s|1","BBH Bogle|s|1","UoqMunThenKhung|r|1","LXGW Marker Gothic|s|1","Snowburst One|d|1","Tirra|s|15","Petemoss|h|1","Iosevka Charon Mono|m|11","Agu Display|d|1","Noto Sans Mongolian|s|1","Grechen Fuemen|h|1","Caacupe One|d|1","Suravaram|r|1","Noto Sans Indic Siyaq Numbers|s|1","Ponomar|d|1","Libertinus Serif Display|d|1","Ingrid Darling|h|1","Parastoo|r|15","Ruge Boogie|h|1","Winky Rough|s|15","Savate|s|15","Noto Sans Old Turkic|s|1","Rubik Broken Fax|d|1","Asap Sharp|s|15","Noto Sans Syloti Nagri|s|1","Tagesschrift|d|1","Moirai One|d|1","Ole|h|1","M PLUS Code Latin|s|15","Bpmf Huninn|s|1","Bahianita|d|1","Bitcount|d|15","Pochaevsk|d|1","Noto Serif Yezidi|r|15","Geomini|s|15","Miranda Sans|s|15","Playpen Sans Deva|h|15","Noto Serif Toto|r|15","Noto Sans Cypriot|s|1","Exile|d|1","Sankofa Display|s|1","Rubik Doodle Triangles|d|1","Noto Sans Adlam Unjoined|s|15","Lisu Bosa|r|15","Noto Sans Osage|s|1","Noto Sans Duployan|s|9","Rubik Maps|d|1","Hibur Mono|m|1","Edu AU VIC WA NT Pre|h|15","Noto Serif Oriya|r|15","Jaini|d|1","Montenegrin Gothic One|r|1","Noto Serif Todhri|r|1","Shafarik|d|1","Noto Sans Medefaidrin|s|15","Saira Stencil|d|15","Warnes|d|1","Noto Sans Tai Le|s|1","Ponnala|d|1","Jaini Purva|d|1","Rubik Lines|d|1","Noto Sans Meroitic|s|1","Edu QLD Hand|h|15","Edu AU VIC WA NT Arrows|h|15","Noto Sans Brahmi|s|1","Noto Serif Grantha|r|1","Noto Sans Wancho|s|1","Betania Patmos|h|1","Bitcount Grid Single Ink|d|15","Noto Sans Buginese|s|1","Matangi|s|15","Noto Sans Imperial Aramaic|s|1","Bpmf Iansui|h|1","Noto Sans Inscriptional Pahlavi|s|1","Noto Sans Ugaritic|s|1","Kay Pho Du|r|15","Padyakke Expanded One|r|1","Noto Sans Hanifi Rohingya|s|15","Noto Sans Elymaic|s|1","Noto Sans Sharada|s|1","Noto Sans Mayan Numerals|s|1","Noto Sans Hatran|s|1","Noto Sans Kawi|s|15","Bitcount Grid Double Ink|d|15","Strichpunkt Sans|s|15","Yarndings 20 Charted|d|1","Noto Sans Limbu|s|1","Noto Sans Mandaic|s|1","Noto Sans Bassa Vah|s|15","Kanchenjunga|s|15","Betania Patmos GDL|h|1","Noto Sans Soyombo|s|1","Noto Sans Gunjala Gondi|s|15","Noto Sans Khudawadi|s|1","Noto Sans Nushu|s|1","Noto Sans Kharoshthi|s|1","Ramsina|r|1","Yarndings 12|d|1"].map(e=>{let[t,a,o]=e.split("|"),s=Number(o);return{family:t,category:a,weights:v.filter((e,t)=>s&1<<t)}}),k=new Map(S.map(e=>[e.family,e]));function N(e){return e?k.get(e)??null:null}function C(e){let t=N(e);return t?`"${t.family}", ${w[t.category]}`:null}function j(e){let t=Array.from(new Set(e.map(e=>N(e)?.family).filter(e=>!!e)));if(!t.length)return null;let a=t.map(e=>{let t=N(e)?.weights??[400];return`family=${e.replace(/ /g,"+")}:wght@${t.join(";")}`}).join("&");return`https://fonts.googleapis.com/css2?${a}&display=swap`}let T={"neutral-product":{name:"Neutral product",description:"Quiet surfaces with a sharp signal color.",values:{primary:"#D7F75B",secondary:"#8CA6FF",accent:"#F5A65B",typeVoice:"instrument",radius:"soft",density:"balanced",themeMode:"system",shadowStyle:"soft",motionStyle:"subtle"}},"editorial-studio":{name:"Editorial studio",description:"Warm paper, serif display type, and spacious composition.",values:{primary:"#1B4332",secondary:"#DDBEA9",accent:"#E76F51",typeVoice:"editorial",radius:"sharp",density:"airy",themeMode:"light",shadowStyle:"flat",motionStyle:"subtle"}},"bold-commerce":{name:"Bold commerce",description:"High contrast, rounded controls, and energetic feedback.",values:{primary:"#6D28D9",secondary:"#06B6D4",accent:"#F97316",typeVoice:"system",radius:"round",density:"balanced",themeMode:"light",shadowStyle:"layered",motionStyle:"expressive"}}},P={projectType:["dashboard","landing","web-app"],framework:f,packageManager:["pnpm","npm","yarn"],typeVoice:["instrument","editorial","system"],radius:["sharp","soft","round"],density:["airy","balanced","dense"],themeMode:["light","dark","system"],shadowStyle:["flat","soft","layered"],motionStyle:["reduced","subtle","expressive"],presetKey:["neutral-product","editorial-studio","bold-commerce","custom"]};function M(e){return"string"==typeof e&&/^#[0-9a-f]{6}$/i.test(e)}function A(e,t,a){return P[e].includes(t)?t:a}function $(e){return e.replace(/[^a-zA-Z0-9._-]+/g,"-").replace(/^-+|-+$/g,"")||"brand-mark"}function D(e){let t=e&&"object"==typeof e?e:{};return{projectName:"string"==typeof t.projectName?t.projectName.slice(0,48):d.projectName,projectType:A("projectType",t.projectType,d.projectType),framework:A("framework",t.framework,d.framework),packageManager:A("packageManager",t.packageManager,d.packageManager),primary:M(t.primary)?t.primary.toUpperCase():d.primary,secondary:M(t.secondary)?t.secondary.toUpperCase():d.secondary,accent:M(t.accent)?t.accent.toUpperCase():d.accent,typeVoice:A("typeVoice",t.typeVoice,d.typeVoice),headingFont:N(t.headingFont)?.family??null,bodyFont:N(t.bodyFont)?.family??null,radius:A("radius",t.radius,d.radius),density:A("density",t.density,d.density),themeMode:A("themeMode",t.themeMode,d.themeMode),shadowStyle:A("shadowStyle",t.shadowStyle,d.shadowStyle),motionStyle:A("motionStyle",t.motionStyle,d.motionStyle),presetKey:A("presetKey",t.presetKey,d.presetKey),logoFileName:"string"==typeof t.logoFileName?$(t.logoFileName):null,logoDataUrl:"string"==typeof t.logoDataUrl&&t.logoDataUrl.startsWith("data:image/")?t.logoDataUrl:null}}let R=`---
name: website-build
description: Use when building, redesigning, or iterating on a premium interactive website — from brief to shippable code. Covers discovery, design system, narrative, motion, responsive build, accessibility, performance, and QA. Triggers on "build website", "design site", "landing page", "interactive site", "premium website", "product site", "marketing site", "redesign".
---

# Premium Interactive Website — Build Skill

Design, build, test, and refine a real responsive website that communicates clearly, feels original, works reliably, and is ready to hand off.

Aim for the craft of premium interactive product websites: cinematic when useful, controlled rather than theatrical, technically credible, fast, accessible, and memorable.

Do not clone another company's identity, copy, composition, motion, or assets. References are for standards, pacing, discipline, and interaction quality — not imitation.

---

## Phase 0: Discovery

### 0.1 — Read everything provided

Before asking anything, consume all available material:

- Product brief or repository
- Existing website (if any)
- Screenshots, recordings, or prototypes
- Brand assets, logo, palette
- Product interface or demo
- Research, positioning, or strategy documents
- Technical constraints (framework, hosting, CMS)
- Competitor references
- User comments from prior iterations

Do not ask for information already available.

### 0.2 — Ask targeted questions

No more than five at once. Only ask when the missing answer materially changes the outcome.

Prefer concrete questions over abstract ones:

| Good | Bad |
|------|-----|
| Who must understand the product within five seconds? | What's the target audience? |
| What should a qualified visitor do next? | What are the conversion goals? |
| What real proof can be shown rather than claimed? | What makes you different? |
| Which part of the product is hardest to understand? | What features should we highlight? |
| What implementation environment must the final site run in? | What tech stack do you prefer? |

When only minor information is missing, proceed with clearly stated assumptions rather than blocking.

Never invent clients, integrations, metrics, performance claims, testimonials, pricing, certifications, or product capabilities.

### 0.3 — Brand guide check

If a brand guide (BRAND.md, design-system.md, or similar) exists in the project:

- Read it completely before any design work
- Extract and enforce all tokens (colors, typography, spacing, radius, shadows, motion timing)
- Use mark and logo assets exactly as provided — do not recreate or approximate
- Follow copy tone, voice, and grammar rules from the guide
- Reference the guide's component library for UI patterns
- Match the animation language and timing from the guide
- Implement dark and light mode exactly as the guide specifies

If no brand guide exists:

- Proceed with Phase 4 (Visual System) to establish tokens
- Make design decisions that serve the product — not fashion
- Document all tokens as you go — they become the reference

---

## Phase 1: Design Thesis

Write a concise internal design thesis before writing any code. This anchors every downstream decision.

### Template

\`\`\`
Product truth:    [One plain sentence — what the product literally does]
Audience tension: [The visitor's most important problem, risk, ambition, or objection]
Core promise:     [The most compelling outcome the product can credibly promise]
Trust mechanism:  [The evidence or product behavior that makes the promise believable]
Conversion goal:  [Primary action + any secondary action]
Desired feeling:  [2-3 precise qualities — e.g., precise, assured, calm, technical,
                   editorial, tactile, severe, playful, private]
                   NOT "modern, clean, and innovative"
Creative concept: [One visual metaphor connected to the product mechanism — e.g.,
                   routing, assembly, signal processing, mapping, compression,
                   calibration, translation, coordination, observation]
                   The metaphor MUST influence layout, transitions, imagery,
                   interaction, and language — it cannot exist only as
                   decorative copy.
\`\`\`

---

## Phase 2: UX Success Criteria

Define what "working well" means before building. These become the pass/fail gates.

- [ ] The product is understandable without animation
- [ ] The primary action is visible and clearly labeled in the first viewport
- [ ] No section hides content because of fixed heights or overflow rules
- [ ] No horizontal scrolling at supported viewport widths
- [ ] Fixed header does not obscure anchored content
- [ ] Every interactive element has hover, focus-visible, active, disabled states
- [ ] All primary interactions work by keyboard
- [ ] Touch targets are at least 44x44px
- [ ] Reduced-motion mode preserves full narrative and all content
- [ ] Mobile is recomposed, not merely scaled down
- [ ] Forms explain their purpose and do not pretend to submit without a backend
- [ ] Page remains readable at 200% browser zoom
- [ ] Short laptop heights (720-768px) are treated as first-class layout constraints

---

## Phase 3: Narrative Architecture

Design the sequence around the visitor's decision process, not a template.

### Default decision journey

| # | Stage | Visitor question | Section purpose |
|---|-------|-----------------|-----------------|
| 1 | Positioning | "What is this?" | State the product and outcome immediately |
| 2 | Proof | "Does it work?" | Show real product, output, or evidence |
| 3 | Stakes | "Why does this matter?" | Make the problem feel real and urgent |
| 4 | Mechanism | "How is this different?" | Explain the unique approach or technology |
| 5 | Experience | "What does it feel like?" | Let the visitor interact with or see the product |
| 6 | Benefits | "What do I get?" | Translate features into outcomes |
| 7 | Trust | "Who else uses this?" | Evidence, data, case studies, social proof |
| 8 | Objection | "What if it doesn't work for me?" | Address the strongest objection directly |
| 9 | Switching | "Is it worth the effort?" | Reduce friction to start or switch |
| 10 | Convert | "What do I do now?" | Clear, single primary action |

Change the sequence when the product requires it. Remove any stage that repeats claims or exists only because landing pages usually have it.

### Section design checklist

For every section, define:

- [ ] The visitor question being answered
- [ ] The single takeaway (one sentence)
- [ ] The evidence being shown (not claimed)
- [ ] The desired interaction
- [ ] Why this section deserves space
- [ ] How it advances from the previous section

### Composition variety

Use varied layouts appropriate to the information type:

| Type | When to use |
|------|-------------|
| Annotated interface | Showing product UI with callouts |
| Fullscreen demonstration | Product is visually compelling |
| Scroll-controlled comparison | Before/after, version comparison |
| Technical diagram | Explaining architecture or mechanism |
| Timeline | Showing process or history |
| Interactive calculator | Letting visitor compute their own value |
| Process demonstration | Step-by-step mechanism |
| Case study narrative | Deep evidence story |
| Dense specification | Technical audience, detailed data |
| Quiet editorial | Reading-heavy trust building |

Do not default to: hero, logo strip, three feature cards, testimonials, pricing, FAQ. Use that only if it genuinely serves the product.

---

## Phase 4: Visual System

Create a visual system from the product context, not current design fashion.

### 4.1 — Color

Define with precise hex values:

| Token | Hex | Usage |
|-------|-----|-------|
| Background | | Page body |
| Surface | | Cards, elevated surfaces |
| Surface raised | | Modals, popovers |
| Border | | Card borders, dividers |
| Border subtle | | Lighter dividers, rule lines |
| Text primary | | Headings, body text |
| Text secondary | | Labels, hints, captions |
| Text disabled | | Disabled states only |
| Brand accent | | CTAs, active states, links |
| Data positive | | Success, gains, positive values |
| Data negative | | Error, losses, negative values |
| Data warning | | Alerts, warnings |
| Data info | | Informational callouts |

Do not default to purple-blue gradients, cyan glows, generic cyberpunk styling, floating blurred orbs, rainbow gradients, or beige as a substitute for taste.

### 4.2 — Typography

Define distinct roles:

| Role | Purpose | Characteristics |
|------|---------|----------------|
| Display | Hero headlines, section titles | Large, confident, tight tracking |
| Heading | Section and card headings | Clear hierarchy from display |
| Body | Paragraphs, descriptions | Comfortable reading size and line-height |
| Label | Form labels, UI labels | Functional, slightly smaller |
| Caption | Metadata, timestamps, hints | Smallest readable size |
| Mono | Code, data, technical values | Monospace for alignment |

Avoid:
- One typeface used identically everywhere
- Enormous full-sentence headlines
- Tiny grey body text
- Paragraphs in uppercase
- Repeated tiny uppercase eyebrows above every heading
- Gradient text
- Monospace used as decoration

### 4.3 — Surfaces and hierarchy

Build hierarchy through position, scale, alignment, whitespace, dividers, cropping, typography, background changes, shared edges, and motion.

Do not:
- Turn all content into rounded cards
- Nest cards inside cards
- Use excessive border radius
- Rely solely on elevation or shadow for hierarchy

### 4.4 — Spacing and grid

Define a spacing scale based on a consistent unit (e.g., 4px: 4, 8, 12, 16, 24, 32, 48, 64, 96, 128).

Define container widths and max-widths per breakpoint.

Define column counts per breakpoint (e.g., 12-col desktop, 8-col tablet, 4-col mobile).

### 4.5 — Token implementation

Map all design tokens to CSS custom properties. This enables theme switching, easy overrides, and consistency:

\`\`\`
:root {
  /* Color */
  --color-bg: #0A0A0A;
  --color-surface: #141414;
  --color-border: #262626;
  --color-text: #F5F5F5;
  --color-text-secondary: #A3A3A3;
  --color-accent: #D4A847;

  /* Spacing (4px base) */
  --space-1: 4px;
  --space-2: 8px;
  --space-3: 12px;
  --space-4: 16px;
  --space-6: 24px;
  --space-8: 32px;
  --space-12: 48px;
  --space-16: 64px;
  --space-24: 96px;

  /* Typography */
  --font-display: 'Inter', sans-serif;
  --font-body: 'Inter', sans-serif;
  --font-mono: 'JetBrains Mono', monospace;

  /* Motion */
  --ease-default: cubic-bezier(0.25, 0.1, 0.25, 1);
  --ease-exit: cubic-bezier(0.55, 0, 1, 0.45);
  --duration-fast: 150ms;
  --duration-normal: 250ms;
  --duration-slow: 600ms;

  /* Radius */
  --radius-sm: 4px;
  --radius-md: 8px;
  --radius-lg: 12px;

  /* Shadows */
  --shadow-sm: 0 1px 2px rgba(0,0,0,0.3);
  --shadow-md: 0 4px 12px rgba(0,0,0,0.4);
  --shadow-lg: 0 8px 24px rgba(0,0,0,0.5);
}
\`\`\`

---

## Phase 5: Motion Language

Define motion tokens before implementation:

| Token | Value | Example |
|-------|-------|---------|
| Fast interaction | 100-150ms | Button hover, toggle |
| Standard transition | 200-300ms | Card reveal, nav transition |
| Deliberate cinematic | 500-800ms | Hero entrance, section transition |
| Stagger interval | 50-100ms | Sequential element reveal |
| Default easing | cubic-bezier(0.25, 0.1, 0.25, 1) | Most transitions |
| Exit easing | cubic-bezier(0.55, 0, 1, 0.45) | Elements leaving |
| Scroll interpolation | 0.05-0.15 | Parallax or scroll-linked motion |

### When to animate

Every animation must do at least one:

- Explain spatial change
- Show cause and effect
- Direct attention
- Reveal information progressively
- Communicate state
- Reinforce the product metaphor
- Make navigation easier to understand

Remove it when it does none of these.

### Reduced motion

Under \`prefers-reduced-motion\`:

- Skip long loaders
- Disable cursor trailing
- Replace scroll-scrubbed movement with immediate states or short fades (150ms max)
- Keep every piece of content available
- Avoid motion that cannot be paused

---

## Phase 6: Storytelling Components

### 6.1 — Fullscreen and sticky storytelling

Use fullscreen or pinned scrollytelling only where sequencing improves understanding.

#### Mandatory fit rule

A pinned stage may activate only when its complete visible content fits inside the available viewport after accounting for:

- Fixed header height
- Browser chrome and safe areas
- Required top and bottom breathing room
- The tallest content state
- Zoom and text wrapping

If it does not fit, automatic fallback to normal document flow.

#### Safe implementation

- Use native scrolling
- Prefer \`100svh\` or \`100dvh\` with fallbacks
- Keep content height flexible with \`min-height\`; avoid hard fixed heights for text containers
- Use \`ResizeObserver\` for runtime height measurement when needed
- Release sticky sections cleanly on scroll past
- Keep anchor links and keyboard navigation functional
- Provide static fallback when JavaScript fails

#### Per-viewport behavior

| Viewport | Behavior |
|----------|----------|
| Wide desktop (1440px+) | Pinned version with full choreography |
| Short laptop (1280x720, 1366x768) | Compact layout or normal flow |
| Tablet (768-1024px) | Reduced layers, shorter pins or normal flow |
| Mobile (below 768px) | Normal document flow, tabs or simple state transitions |

### 6.2 — Loader

Optional. Use only when it meaningfully establishes the brand or prepares critical first-view assets.

Rules:

- Keep it brief and tied to actual readiness
- Never impose an arbitrary delay
- Do not show fake percentages
- Skip or abbreviate on repeat visits (use sessionStorage)
- Skip the long version under \`prefers-reduced-motion\`
- Share one visual element with the hero so the transition is continuous
- Unlock scrolling only when the page is stable

A generic spinner is not a premium experience.

### 6.3 — Custom cursor

Optional, desktop-only. Use only when it improves feedback or reinforces the concept.

Rules:

- Enable only for fine pointers (\`@media (pointer: fine)\`)
- Disable on touch devices
- Respect reduced motion
- Preserve native cursor for text, forms, and precision tasks
- Keep interpolation fast and controlled
- Never obscure text or small controls
- Clickability must not depend on the cursor effect

State system (pick relevant subset): default, link, primary action, drag, view, play, external link.

Do not combine expansion, magnetic movement, labels, distortion, and sound on every hover.

---

## Phase 7: Product-Led Imagery

Prioritize in order:

1. Real product interfaces
2. Real outputs or results
3. Real customer environments
4. Real technical diagrams
5. Real data
6. Real process artifacts
7. Carefully directed photography
8. Purpose-built generated imagery

Avoid generic stock illustration and meaningless 3D decoration.

### Product screenshot rules

- Crop intentionally — show one meaningful task at a time
- Preserve legibility — never blur or obscure to look "artistic"
- Use real interface content where permitted
- Avoid hiding the product behind excessive tilt, glow, blur, or device frames
- Show the product doing something, not just existing

When no visual assets exist, derive visuals from the product mechanism. Do not fabricate fake dashboards or unsupported evidence.

---

## Phase 8: Copy Standards

Write concrete, credible copy.

### Requirements

- Explain what the product literally does
- Explain what outcome it creates
- Explain how it works
- Explain why it is different
- Support claims with evidence
- Tell the visitor what to do next

### Rules

- Use specific nouns and verbs
- Keep headlines concise
- Do not repeat the headline in the paragraph below it
- Do not invent urgency
- Do not make every section sound like a manifesto
- Voice should feel authored for the actual product

### Forbidden words

Revolutionary, world-class, next-generation, supercharge, empower, seamless, cutting-edge, game-changing, disruptive, innovative, best-in-class, unmatched, unparalleled, effortless, powerful, robust, scalable, enterprise-grade.

### Content strategy when real copy is unavailable

- Derive copy from the product brief — what it does, who it is for, why it is different
- Write factual, specific sentences — not marketing fluff
- Mark any placeholder content clearly with HTML comments: \`<!-- PLACEHOLDER: needs real testimonial -->\`
- Never fabricate testimonials, metrics, client names, integration partners, or security certifications
- Use real product terminology from the brief
- If the product has real data (metrics, pricing, features), use it
- If not, use plausible but clearly marked examples

---

## Phase 9: Interaction Design

### 9.1 — Navigation

- Show current location where useful
- Remain legible over changing backgrounds
- Behave predictably through sticky sections
- Support keyboard operation (arrow keys, Escape to close)
- Collapse cleanly on small screens (hamburger or drawer)
- Close through selection, outside click, Escape, and viewport changes
- Never depend solely on hover for discoverability

### 9.2 — Tabs and segmented controls

- Use correct semantic roles (\`role="tablist"\`, \`role="tab"\`, \`role="tabpanel"\`)
- Support arrow-key navigation between tabs
- Keep the selected state visually obvious
- Avoid trapping content off-screen on mobile
- Scroll horizontally when wrapping would create a tall block

### 9.3 — Forms

- Use persistent visible labels (not placeholder-only)
- Explain why information is requested
- Validate on blur with clear inline messages
- Preserve entered data after errors
- Provide meaningful loading, success, and error states
- State honestly when the form is a prototype without a live endpoint

### 9.4 — All interactive components

Every interactive element must have these states where applicable:

| State | Visual | Keyboard |
|-------|--------|----------|
| Default | Resting appearance | — |
| Hover | Subtle feedback | — |
| Focus-visible | Clear ring/outline | Tab to element |
| Active/pressed | Momentary feedback | Enter/Space |
| Disabled | Reduced opacity, no interaction | Tab reaches but cannot activate |
| Loading | Spinner or skeleton | Announced to screen reader |
| Error | Red border + message | Focus moves to error |
| Success | Green confirmation | Announced to screen reader |

---

## Phase 10: Responsive Strategy

Treat desktop, short laptop, tablet, and mobile as related but distinct compositions.

### Breakpoints

| Name | Width | Height concerns |
|------|-------|-----------------|
| Wide desktop | 1440px+ | None — full composition |
| Desktop | 1280-1439px | None |
| Short laptop | 1280x720, 1366x768 | 720-768px height is critical |
| Tablet landscape | 1024-1279px | Varies |
| Tablet portrait | 768-1023px | 1024px height common |
| Mobile large | 430-767px | Safe areas, notch |
| Mobile standard | 375-429px | Primary mobile target |
| Mobile small | 320-374px | Minimum supported |

### Per-viewport rules

**Wide desktop:**
- Allow complex spatial composition
- Use fullscreen sequences only when content fits
- Preserve enough product detail to be useful

**Short laptop:**
- Reduce headline scale and vertical spacing
- Remove unnecessary decorative layers
- Disable pinned stages that cannot fit
- Ensure primary actions remain visible without scrolling

**Tablet:**
- Reduce simultaneous layers
- Shorten pinned durations or return to normal flow
- Increase touch targets to 48px minimum
- Test both portrait and landscape

**Mobile:**
- Normal document flow (no scroll locking)
- No custom cursor
- Navigation reachable (thumb zone)
- Core message and action prioritized
- No horizontal media overflow
- Body text 16px minimum
- Respect safe areas (notch, home indicator)

The mobile experience must feel designed, not tolerated.

### CSS approach

- Use CSS custom properties for all tokens (enables theme switching, easy overrides)
- Mobile-first media queries (min-width) for progressive enhancement
- BEM naming for component styles (\`.block__element--modifier\`)
- Avoid \`!important\` — specificity should be managed through structure
- Keep animation CSS separate from layout CSS when possible

---

## Phase 11: Accessibility

Implement WCAG 2.2 AA as the minimum standard.

### Required

- [ ] Semantic HTML5 elements (\`<header>\`, \`<nav>\`, \`<main>\`, \`<section>\`, \`<article>\`, \`<footer>\`)
- [ ] Logical heading hierarchy (h1, h2, h3 — no skips)
- [ ] Correct ARIA landmarks and roles
- [ ] Skip navigation link (first focusable element)
- [ ] Full keyboard operation for all interactive elements
- [ ] Visible focus indicators (minimum 2px solid, high contrast)
- [ ] Color contrast: 4.5:1 normal text, 3:1 large text (18px+ or 14px+ bold)
- [ ] Alternative text for all meaningful images
- [ ] Persistent form labels (not placeholder-only)
- [ ] Screen-reader-friendly names for custom components
- [ ] Touch targets at least 44x44px
- [ ] Clear link purpose (avoid "click here")
- [ ] Captions or transcripts for meaningful video or audio
- [ ] No content relies solely on color to convey meaning
- [ ] No keyboard traps
- [ ] No content disappears on focus

### Reduced motion

- [ ] Respect \`prefers-reduced-motion: reduce\`
- [ ] Disable or replace all non-essential animation
- [ ] All content remains available without motion
- [ ] No motion that cannot be paused

---

## Phase 12: Performance

Treat performance as part of design quality.

### Core Web Vitals targets

| Metric | Target | What it measures |
|--------|--------|------------------|
| LCP | Under 2.5s | Largest Contentful Paint — when main content is visible |
| INP | Under 200ms | Interaction to Next Paint — responsiveness |
| CLS | Under 0.1 | Cumulative Layout Shift — visual stability |

### Implementation rules

- [ ] Hero renders quickly — preload only critical first-viewport assets
- [ ] Lazy-load below-the-fold media (\`loading="lazy"\`)
- [ ] Reserve media dimensions to prevent layout shifts (width/height or aspect-ratio CSS)
- [ ] Use appropriately sized images (WebP/AVIF with fallbacks)
- [ ] Avoid large video files for minor atmospheric movement
- [ ] Pause off-screen canvases and animation loops (\`IntersectionObserver\`)
- [ ] Keep custom cursor updates outside main component render cycle
- [ ] Clean up observers and event listeners on unmount
- [ ] Use \`requestAnimationFrame\` for visual updates
- [ ] Provide static fallbacks for heavy effects
- [ ] Avoid fake loading delays
- [ ] Test on average hardware, not only high-end development machines
- [ ] No layout shifts from font loading (\`font-display: swap\` or \`optional\`)

A page that stutters is not premium.

---

## Phase 13: SEO and Meta

- [ ] Single \`<h1>\` per page
- [ ] Descriptive \`<title>\` (50-60 chars)
- [ ] Meta description (150-160 chars)
- [ ] Open Graph tags (og:title, og:description, og:image, og:url)
- [ ] Twitter Card tags
- [ ] Canonical URL
- [ ] Structured data (JSON-LD) where applicable
- [ ] Semantic HTML structure (headings, landmarks)
- [ ] Descriptive alt text on images
- [ ] Clean URL structure
- [ ] Sitemap.xml
- [ ] robots.txt

---

## Phase 14: Error States and Edge Cases

Handle gracefully:

- [ ] 404 page (on-page, not server default)
- [ ] Network failure / offline state
- [ ] Form submission failure
- [ ] Empty states (no data, no results)
- [ ] Loading states (skeleton, spinner, progress)
- [ ] Image load failure (fallback or graceful hide)
- [ ] JavaScript disabled (core content still accessible)
- [ ] Slow network (progressive enhancement)
- [ ] Browser zoom at 200%+ (no clipping, no overflow)
- [ ] Very long content (text wrapping, no truncation)
- [ ] Very short content (no awkward empty space)

---

## Phase 15: Implementation Architecture

Choose technology based on the experience, not novelty.

### Stack decision

| Complexity | Stack |
|------------|-------|
| Static content, minimal interaction | HTML + CSS + vanilla JS |
| Moderate interaction, need reactivity | HTML + CSS + Alpine.js or htmx |
| Complex state, component-driven | React, Next.js, Vue, or Svelte |
| Complex scroll choreography | Above + GSAP + ScrollTrigger |
| 3D or WebGL required | Three.js or R3F |

Default to plain HTML, CSS, and vanilla JavaScript unless the experience genuinely demands more.

### Architecture rules

- Do not use multiple animation libraries for the same job
- Keep content separate from animation logic
- Create reusable primitives only after the design reveals a real pattern
- Do not over-abstract early
- Use CSS custom properties for design tokens (colors, spacing, timing)
- Keep JavaScript progressive — core content works without it

### Useful primitives (create as needed)

| Primitive | Purpose |
|-----------|---------|
| Section stage | Standardized section wrapper |
| Sticky sequence | Scroll-controlled pinned section |
| Reveal | Scroll-triggered entrance animation |
| Mask transition | Content reveal through shape |
| Cursor state | Custom cursor management |
| Loader | Page load sequence |
| Media frame | Image/video container with fallbacks |
| Nav state | Navigation behavior management |
| Reduced-motion substitute | Alternate behavior for a11y |
| Height-aware layout | Viewport height fallback logic |

---

## Phase 16: Build Sequence

Follow this order when implementing. Complete each step fully before moving to the next.

### Step 1: Project setup

- Create folder structure
- Set up HTML boilerplate with meta tags
- Link CSS and JS files
- Create the CSS custom property token system (from Phase 4 or brand guide)

### Step 2: Layout shell

- Build header, nav, main sections (with IDs for anchoring), footer
- Content is placeholder text at this stage
- Responsive breakpoints in CSS from the start
- Verify no horizontal overflow at all viewports

### Step 3: Hero section (complete)

- Design, content, responsive, animation — finish it fully
- This becomes the quality benchmark for every other section
- Test at all viewports before proceeding

### Step 4: One "pattern" section (complete)

- Pick the most representative section (usually product demo or proof section)
- Build it end-to-end: layout, content, interaction, animation, responsive
- This establishes the reusable patterns for remaining sections

### Step 5: Remaining sections

- Replicate the pattern, adapting per the narrative architecture
- Each section: content first, then layout refinement, then animation
- Checkpoint: review all sections before adding global interactions

### Step 6: Global interactions

- Navigation behavior (sticky, collapse, current state)
- Custom cursor (if justified by Phase 6.3)
- Form handling and validation
- Tab and segmented control behavior

### Step 7: Motion and animation

- Page load sequence (loader if justified)
- Scroll-triggered reveals
- Scroll-linked animations (if used)
- State transitions

### Step 8: Responsive pass

- Test and fix at every breakpoint in the matrix
- Short laptop critical — test 1280x720 and 1366x768
- Mobile: verify normal flow, touch targets, no overflow

### Step 9: Accessibility pass

- Keyboard navigation through all interactive elements
- Screen reader test (VoiceOver or NVDA)
- Focus indicator visibility check
- Contrast ratio verification
- ARIA attributes on custom components

### Step 10: Performance pass

- Lazy load below-fold media
- Font loading optimization
- Animation cleanup (offscreen pauses, observer cleanup)
- Image optimization (format, size, dimensions)

### Step 11: Error states and edge cases

- 404 page
- Form failure states
- Empty states
- Loading states
- Image fallbacks

### Step 12: SEO and meta

- Title, description, Open Graph, Twitter Card
- Structured data if applicable
- robots.txt, sitemap.xml

### Step 13: Final QA

- Full test matrix from Phase 21
- Anti-slop checklist from Phase 23
- Self-critique from Phase 24

### Iteration checkpoints

Pause and get user feedback at these moments:

- **After Step 3:** "Hero section complete. Review before I build the remaining sections."
- **After Step 4:** "Pattern section complete. This establishes the design language. Review before I replicate across other sections."
- **After Step 5:** "All sections built. Review content and layout before I add interactions and animation."
- **After Step 8:** "Responsive pass complete. Review at mobile and short laptop before the accessibility pass."
- **After Step 13:** "Final QA complete. Full test results below. Ready for delivery or additional revisions."

---

## Phase 17: Build-Test-Critique Loop

Do not present the first functioning version as finished.

### Pass 1 — Build

- Implement the real responsive page
- Use real content and evidence where available
- Ensure semantic structure and baseline accessibility
- All interactive states implemented
- Responsive at all target viewports

### Pass 2 — UX Audit

Inspect the page as a user, not as its author:

- [ ] Is the hero understandable immediately?
- [ ] Is the first action obvious?
- [ ] Does anything clip on short screens?
- [ ] Is any information hidden behind overflow?
- [ ] Do fixed or sticky elements collide?
- [ ] Are controls discoverable without explanation?
- [ ] Are transitions helping comprehension?
- [ ] Does mobile have too much vertical control chrome?
- [ ] Does the page feel too dense, too slow, or too repetitive?
- [ ] Can a visitor explain the product after five seconds?

Fix all findings.

### Pass 3 — Validation

Run the test matrix. Capture screenshots. Revise any failure before delivery.

When a defect is found, correct the underlying rule — do not patch only one viewport.

---

## Phase 18: Viewport and Input Test Matrix

### Viewports to test

| Viewport | Width x Height | Priority |
|----------|---------------|----------|
| Wide desktop | 1600 x 1000 | High |
| Desktop | 1440 x 900 | High |
| Standard laptop | 1366 x 768 | High |
| Desktop compact | 1280 x 720 | Critical |
| Tablet landscape | 1024 x 768 | High |
| Tablet portrait | 768 x 1024 | High |
| Mobile large | 430 x 932 | High |
| Mobile standard | 390 x 844 | High |
| Mobile small | 360 x 640 | Medium |
| Mobile tiny | 320 x 568 | Low |

### Additional tests

- [ ] 200% browser zoom
- [ ] Keyboard-only navigation (Tab, Enter, Space, Escape, Arrow keys)
- [ ] Touch input (tap, swipe, long press)
- [ ] Fine-pointer input (hover, click, drag)
- [ ] Reduced-motion mode (\`prefers-reduced-motion: reduce\`)
- [ ] Slow network / disabled cache
- [ ] JavaScript failure or disabled enhancement

### Per-viewport verification

- [ ] No horizontal overflow
- [ ] No clipped text or controls
- [ ] No hidden content inside \`overflow: hidden\`
- [ ] No overlapping fixed header and content
- [ ] No unreachable controls
- [ ] No accidental scroll traps
- [ ] No body scroll lock after loader or menu closes
- [ ] No layout jump when fonts or media load
- [ ] No pinned sequence exceeding available height
- [ ] No mobile control group consuming most of the first screen

### Screenshots to capture

- [ ] Hero (first viewport)
- [ ] Main product demonstration
- [ ] Most complex sticky or interactive section
- [ ] Product navigation or tabs
- [ ] Form or conversion section
- [ ] Mobile menu (open state)
- [ ] Mobile content flow

---

## Phase 19: Quality Gates

Do not call the site complete unless ALL of the following are true.

### Content

- [ ] Opening viewport states what the product does
- [ ] Each section says something new
- [ ] Claims are supported or clearly labeled as conceptual
- [ ] No fabricated evidence
- [ ] Copy avoids all forbidden words

### UX

- [ ] Primary actions are obvious
- [ ] Current navigation state is understandable
- [ ] Controls work by mouse, touch, and keyboard
- [ ] Forms provide honest feedback
- [ ] Short screens do not clip fullscreen content

### Visual design

- [ ] Concept is product-specific
- [ ] Typography has clear roles
- [ ] Color is intentional (tokens defined)
- [ ] Cards, glows, labels, decorative layers ruthlessly edited
- [ ] Page could not belong to ten unrelated startups

### Motion

- [ ] Motion has narrative or functional purpose
- [ ] Reverse scrolling remains understandable
- [ ] Reduced-motion mode is complete
- [ ] No scroll hijacking
- [ ] No long repeated loader

### Technical

- [ ] No console errors
- [ ] No horizontal overflow
- [ ] No broken media
- [ ] No missing focus states
- [ ] No skipped heading levels
- [ ] No unnecessary dependencies
- [ ] No obvious performance bottlenecks
- [ ] Core Web Vitals targets met

### Accessibility

- [ ] WCAG 2.2 AA contrast ratios met
- [ ] All interactive elements keyboard-accessible
- [ ] Screen reader testing completed
- [ ] No keyboard traps
- [ ] Form labels and ARIA attributes correct

---

## Phase 20: Anti-Slop Checklist

Reject and revise when several of these appear without a product-specific reason.

### Visual

- [ ] Purple-blue gradient by default
- [ ] Decorative neon glow
- [ ] Glass cards everywhere
- [ ] Excessive border radius
- [ ] Floating blurred orbs
- [ ] Generic repeating stripe textures
- [ ] Gradient heading text
- [ ] Every element placed inside a container

### Typography

- [ ] One indistinct typeface for all roles
- [ ] Tiny uppercase eyebrow above every section
- [ ] Oversized full-sentence hero
- [ ] Tiny low-contrast body copy
- [ ] Flat hierarchy
- [ ] Excessively tight display tracking

### Layout

- [ ] Repeated equal three-column feature cards
- [ ] Cards nested inside cards
- [ ] Identical centered composition in every section
- [ ] Arbitrary 01, 02, 03 labels with no navigational value
- [ ] Mobile content touching viewport edges
- [ ] Fixed-height sections containing variable text
- [ ] Every section looks the same (same layout, same rhythm)
- [ ] No visual hierarchy between sections
- [ ] Content organized by feature list instead of user journey
- [ ] Navigation that requires explanation
- [ ] Footer with more content than the body

### Motion

- [ ] Every element fading upward
- [ ] Constant floating
- [ ] Elastic or bouncy entrances
- [ ] Image zoom on every hover
- [ ] Scroll hijacking
- [ ] Cursor effects that reduce precision
- [ ] Motion with no narrative purpose

### Interaction

- [ ] Hover effects that hide content
- [ ] Animations that play on every scroll event
- [ ] Modal or popup for content that could be inline
- [ ] Infinite scroll where pagination would be clearer
- [ ] Auto-playing video without user consent
- [ ] Chatbot popup that obstructs content on load

### Copy

- [ ] Generic SaaS phrases
- [ ] Inflated superlatives
- [ ] Headline and paragraph repeating the same claim
- [ ] Unverifiable urgency
- [ ] Empty manifesto language

### Trust

- [ ] "Trusted by" with no actual names
- [ ] "Coming soon" for features that should be launched
- [ ] Beta labels on production features
- [ ] "AI-powered" without explanation of what the AI does
- [ ] Security badges with no certification details

### Quality

- [ ] Placeholder imagery
- [ ] Broken media
- [ ] Weak contrast
- [ ] Missing focus states
- [ ] Overflow on mobile
- [ ] Clipping on short laptops
- [ ] Loading states with no feedback
- [ ] Effects that break when scrolling backward
- [ ] Desktop-only thinking
- [ ] Fabricated data or testimonials

---

## Phase 21: Final Self-Critique

Answer honestly before delivery:

1. Can a visitor explain the product after five seconds?
2. Is the hero clear without motion?
3. What decision is uniquely connected to this product?
4. Is the real product or mechanism shown early enough?
5. Does every section advance the story?
6. Does any section clip at 1280x720 or 1366x768?
7. Does every fullscreen composition genuinely fit its viewport?
8. Is normal scrolling still under the user's control?
9. Does the mobile version feel independently designed?
10. Is reduced-motion mode complete?
11. Are primary actions obvious?
12. Are claims supported?
13. Does the copy sound like the actual company?
14. Are the interactions useful rather than decorative?
15. Can any card, glow, label, animation, or paragraph be removed?
16. Would an experienced designer believe every visible choice was intentional?
17. Does the page remain smooth on ordinary hardware?
18. Have at least two refinement passes been completed?

Revise any area with an unsatisfactory answer.

---

## Phase 22: Deliverables

Provide all of the following:

1. **Assumptions made** — what was assumed when information was missing
2. **Design thesis** — product truth, audience tension, promise, trust, goal, feeling, concept
3. **Narrative and sitemap** — section sequence with visitor questions and takeaways
4. **Visual system** — color tokens, typography roles, spacing scale, surface treatment
5. **Motion and interaction system** — timing tokens, easing, scroll behavior, cursor behavior
6. **Responsive strategy** — breakpoint behavior including short-laptop fallback
7. **Completed implementation** — the real code, not a mockup
8. **Accessibility decisions** — what was implemented and any tradeoffs
9. **Performance decisions** — what was optimized and any tradeoffs
10. **Test matrix results** — which viewports were tested and outcomes
11. **Screenshots** — representative desktop, short-laptop, tablet, and mobile
12. **Remaining gaps** — content, asset, or integration items still needed
13. **What makes it original** — concise explanation of the design's uniqueness
14. **Source files** — repository-ready output or downloadable files

Do not claim tests were performed unless they were actually run.

Do not claim a form, integration, analytics, or backend works unless it is connected and verified.

The final result should feel coherent, precise, alive, and useful — not busy for the sake of appearing premium.

---

## Phase 23: Handoff

Leave the project in a state where another developer can pick it up.

### README.md should include

- What the site is and what it does
- How to run locally (file path or dev server command)
- Folder structure explanation
- Design token reference (or link to brand guide)
- Known issues or technical debt
- Browser support targets
- Deployment instructions (if applicable)

### Code conventions

- Consistent indentation (2 spaces for HTML/CSS, 2 or 4 for JS — pick one and stick to it)
- Descriptive class names (not \`.a\`, \`.box1\`, \`.wrapper-inner-final-v2\`)
- Comments only where the why is non-obvious (not what the code does)
- Separate concerns: HTML structure, CSS presentation, JS behavior
- No dead code — remove what is not used
- Clean git history with meaningful commit messages
`,F={instrument:'"Geist", "Helvetica Neue", Arial, sans-serif',editorial:'"Newsreader", Georgia, "Times New Roman", serif',system:'ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif'},B={sharp:"0px",soft:"0.625rem",round:"100px"},E={airy:{space:"0.3125rem",control:"2.75rem",section:"2rem"},balanced:{space:"0.25rem",control:"2.5rem",section:"1.5rem"},dense:{space:"0.1875rem",control:"2.25rem",section:"1rem"}},O=[{key:"display",label:"Display",role:"heading",weight:700,lineHeight:"1.1",usage:"Hero statements, one per screen",sizes:{airy:"3rem",balanced:"2.5rem",dense:"2.25rem"}},{key:"h1",label:"H1",role:"heading",weight:700,lineHeight:"1.15",usage:"Page title",sizes:{airy:"2.25rem",balanced:"2rem",dense:"1.75rem"}},{key:"h2",label:"H2",role:"heading",weight:600,lineHeight:"1.2",usage:"Section heading",sizes:{airy:"1.75rem",balanced:"1.5rem",dense:"1.375rem"}},{key:"h3",label:"H3",role:"heading",weight:600,lineHeight:"1.3",usage:"Card and panel heading",sizes:{airy:"1.375rem",balanced:"1.25rem",dense:"1.125rem"}},{key:"h4",label:"H4",role:"heading",weight:500,lineHeight:"1.35",usage:"Sub-heading, table group label",sizes:{airy:"1.125rem",balanced:"1.0625rem",dense:"1rem"}},{key:"body-lg",label:"Body LG",role:"sans",weight:400,lineHeight:"1.6",usage:"Lead paragraph, empty-state copy",sizes:{airy:"1.1875rem",balanced:"1.125rem",dense:"1.0625rem"}},{key:"body",label:"Body",role:"sans",weight:400,lineHeight:"1.6",usage:"Default text and controls",sizes:{airy:"1rem",balanced:"1rem",dense:"0.9375rem"}},{key:"body-sm",label:"Body SM",role:"sans",weight:400,lineHeight:"1.5",usage:"Secondary text, table cells, helper text",sizes:{airy:"0.9375rem",balanced:"0.875rem",dense:"0.8125rem"}},{key:"caption",label:"Caption",role:"sans",weight:500,lineHeight:"1.4",usage:"Labels, badges, metadata",sizes:{airy:"0.8125rem",balanced:"0.75rem",dense:"0.6875rem"}},{key:"code",label:"Code",role:"mono",weight:400,lineHeight:"1.6",usage:"Code, IDs, tabular numerals",sizes:{airy:"0.9375rem",balanced:"0.875rem",dense:"0.8125rem"}}],L={flat:{sm:"none",md:"none",lg:"none"},soft:{sm:"0 1px 2px rgb(0 0 0 / 0.08)",md:"0 8px 24px rgb(0 0 0 / 0.10)",lg:"0 24px 64px rgb(0 0 0 / 0.14)"},layered:{sm:"0 1px 2px rgb(0 0 0 / 0.12), 0 1px 8px rgb(0 0 0 / 0.06)",md:"0 8px 16px rgb(0 0 0 / 0.12), 0 2px 6px rgb(0 0 0 / 0.08)",lg:"0 32px 80px rgb(0 0 0 / 0.22)"}},I={reduced:{fast:"0ms",normal:"0ms",easing:"linear"},subtle:{fast:"120ms",normal:"200ms",easing:"cubic-bezier(0.2, 0, 0, 1)"},expressive:{fast:"160ms",normal:"320ms",easing:"cubic-bezier(0.16, 1, 0.3, 1)"}};function z(e){let t=e/255;return t<=.03928?t/12.92:((t+.055)/1.055)**2.4}function H(e,t){let a=e=>{let t,{r:a,g:o,b:s}={r:Number.parseInt((t=e.replace("#","")).slice(0,2),16),g:Number.parseInt(t.slice(2,4),16),b:Number.parseInt(t.slice(4,6),16)};return .2126*z(a)+.7152*z(o)+.0722*z(s)},[o,s]=[a(e),a(t)].sort((e,t)=>t-e);return(o+.05)/(s+.05)}function G(e){return H(e,"#000000")>=H(e,"#FFFFFF")?"#000000":"#FFFFFF"}function U(e,t=1){let a=/^(-?[\d.]+)(rem|px)$/.exec(e.trim());if(!a)return e;let o=Number(a[1])*("rem"===a[2]?16:1)*t;return`${Math.round(10*o)/10}px`}let K=[{name:"sm",factor:.6,cap:null,usage:"Badges, chips, small tags"},{name:"md",factor:.8,cap:null,usage:"Buttons, inputs, menu items"},{name:"lg",factor:1,cap:20,usage:"Cards, dialogs, popovers"},{name:"xl",factor:1.4,cap:28,usage:"Hero and feature containers"}];function V(e,t){let a=U(e,t.factor);if(null===t.cap)return a;let o=Number.parseFloat(a);return Number.isFinite(o)?`${Math.min(o,t.cap)}px`:a}function W(e){let t=E[e.density],a=L[e.shadowStyle],o=I[e.motionStyle];return{brand:{primary:e.primary,secondary:e.secondary,accent:e.accent},typography:{sans:C(e.bodyFont??"")??F[e.typeVoice],heading:C(e.headingFont??"")??F[e.typeVoice],mono:'"SFMono-Regular", Consolas, "Liberation Mono", monospace'},typeScale:O.map(({sizes:t,...a})=>({...a,size:t[e.density]})),shape:{radius:B[e.radius],...a},spacing:t,motion:o,light:{background:"#FFFFFF",foreground:"#111111",card:"#FFFFFF",cardForeground:"#111111",popover:"#FFFFFF",popoverForeground:"#111111",primary:e.primary,primaryForeground:G(e.primary),secondary:e.secondary,secondaryForeground:G(e.secondary),accent:e.accent,accentForeground:G(e.accent),muted:"#F4F4F5",mutedForeground:"#66666F",destructive:"#DC2626",destructiveForeground:"#FFFFFF",border:"#E4E4E7",input:"#D4D4D8",ring:e.primary,success:"#15803D",warning:"#A16207",info:"#0369A1"},dark:{background:"#0A0A0A",foreground:"#FAFAFA",card:"#111111",cardForeground:"#FAFAFA",popover:"#171717",popoverForeground:"#FAFAFA",primary:e.primary,primaryForeground:G(e.primary),secondary:e.secondary,secondaryForeground:G(e.secondary),accent:e.accent,accentForeground:G(e.accent),muted:"#262626",mutedForeground:"#A3A3A3",destructive:"#F87171",destructiveForeground:"#171717",border:"#303030",input:"#3A3A3A",ring:e.primary,success:"#4ADE80",warning:"#FACC15",info:"#38BDF8"}}}function q(e){return`  --background: ${e.background};
  --foreground: ${e.foreground};
  --card: ${e.card};
  --card-foreground: ${e.cardForeground};
  --popover: ${e.popover};
  --popover-foreground: ${e.popoverForeground};
  --primary: ${e.primary};
  --primary-foreground: ${e.primaryForeground};
  --secondary: ${e.secondary};
  --secondary-foreground: ${e.secondaryForeground};
  --accent: ${e.accent};
  --accent-foreground: ${e.accentForeground};
  --muted: ${e.muted};
  --muted-foreground: ${e.mutedForeground};
  --destructive: ${e.destructive};
  --destructive-foreground: ${e.destructiveForeground};
  --border: ${e.border};
  --input: ${e.input};
  --ring: ${e.ring};
  --status-success: ${e.success};
  --status-warning: ${e.warning};
  --status-info: ${e.info};`}function J(e){let t=j([e.headingFont,e.bodyFont]);return t?`@import url("${t}");
`:""}let _=String.raw`export type AsyncState = "idle" | "loading" | "success" | "empty" | "error";
export type ComboBoxOption = { value: string; label: string; disabled?: boolean };
export type DataTableColumn<T> = { key: string; header: string; cell?: (row: T) => string; sortable?: boolean; sortValue?: (row: T) => string | number };
`,Y=String.raw`export type AsyncState = "idle" | "loading" | "success" | "empty" | "error";
export type ComboBoxOption = { value: string; label: string; disabled?: boolean };
export type DataTableColumn<T> = { key: string; header: string; cell?: (row: T) => string; sortable?: boolean; sortValue?: (row: T) => string | number };
`,Z=[{key:"combo-box",label:"ComboBox",description:"Searchable selection with loading, disabled, clearable, and empty states",states:["default","open","selected","empty","loading","disabled"]},{key:"data-table",label:"DataTable",description:"Typed sorting, selection, pagination, and async states",states:["populated","sorted","selected","paginated","loading","empty","error"]},{key:"empty-state",label:"EmptyState",description:"No-data surface with size, icon, and action slots",states:["compact","default","with action"]},{key:"error-state",label:"ErrorState",description:"Recoverable error surface with compact and reset options",states:["compact","default","recoverable"]},{key:"suspense-container",label:"SuspenseContainer",description:"Explicit loading, empty, error, and success boundary",states:["idle","loading","success","empty","error"]},{key:"toast-provider",label:"Sonner toasts",description:"Accessible feedback surface with configurable provider props",states:["success","info","warning","error","loading"]}],Q=Z.map(({key:e})=>e);Z.map(({label:e})=>e);let X={"combo-box":[],"data-table":["suspense-container"],"empty-state":[],"error-state":[],"suspense-container":["empty-state","error-state"],"toast-provider":[]},ee={dashboard:["combo-box","data-table","toast-provider"],landing:["combo-box"],"web-app":["combo-box","data-table","toast-provider"]};function et(e){return ea(ee[e])}function ea(e){let t,a=[],o=new Set,s=e=>{if(!a.includes(e)){if(o.has(e))throw Error(`Pattern dependency cycle at ${e}`);o.add(e),X[e].forEach(s),o.delete(e),a.push(e)}};return(t=new Set(Q),(e??Q).filter(e=>t.has(e))).forEach(s),a}function eo(e){return e.map(e=>Z.find(t=>t.key===e)?.label??e)}let es={dashboard:{name:"Operations dashboard",sources:["Forge Dashboard Kit","Forge Data View Kit"],composition:"App shell → page header → summary cards → filters → data table → detail or CRUD dialog",components:["admin shell and responsive sidebar","page header and breadcrumbs","metric/stat cards","data table with pagination","search, select, combo-box, and date-range filters","empty, loading, error, and permission states","charts and progress indicators","bulk upload and confirmation dialogs"],packages:["lucide-react","sonner","recharts","zod","react-hook-form","@tanstack/react-query"],guardrails:["Keep tables, filters, and actions composable rather than tying them to one domain.","Design loading, empty, error, and permission states alongside the happy path.","Prefer dense, scannable layouts with a clear page hierarchy."]},landing:{name:"Narrative marketing site",sources:["Forge Marketing Sections","Forge Motion Primitives"],composition:"Site header → hero → proof or services → feature/story sections → gallery or work → FAQ/CTA → footer",components:["site header and mobile navigation","hero with a focused primary action","section label and reusable content block","services, feature, or project cards","gallery, carousel, and image lightbox","FAQ and testimonial sections","contact, consultation, or lead form","footer and social links","optional motion primitives with reduced-motion fallbacks"],packages:["lucide-react","motion","zod","react-hook-form"],guardrails:["Use real content and real proof; never invent testimonials, logos, or metrics.","Keep animation subordinate to the story and provide a reduced-motion path.","Treat sections as independently reorderable compositions, not one giant page component."]},"web-app":{name:"Product application",sources:["Forge App Shell Kit","Forge Product Flow Kit"],composition:"Auth/onboarding → app shell → route frame → feature widget → data/query states → modal or secondary flow",components:["authentication and onboarding forms","top or bottom navigation with responsive app shell","route-level page frame and loading boundary","feature widgets and cards","search, filters, and content grids","data table and query-state wrappers","share, payment, and confirmation modals","empty, error, and skeleton states","forms validated with schema-first rules"],packages:["lucide-react","sonner","zod","react-hook-form","@tanstack/react-query","motion"],guardrails:["Keep route composition separate from reusable feature widgets.","Model authentication, query, mutation, and offline/loading states explicitly.","Use modal and sheet patterns only for secondary flows; preserve a clear primary route."]}};function er(e,t){return Array.from(new Set(["button","card","input","dialog","dropdown-menu","separator","skeleton",..."dashboard"===e?["table","select","calendar","pagination"]:[],..."landing"===e?["accordion","navigation-menu","sheet","carousel"]:[],..."web-app"===e?["select","sheet","tabs"]:[],...t.includes("combo-box")?["command","popover"]:[],...t.includes("data-table")?["table"]:[],...t.includes("toast-provider")?["sonner"]:[]]))}let en={react:"Props are plain function props: `onValueChange`, `reset`, `onPageChange`. Every component accepts `className`.",vue:"ComboBox is a `v-model` component; callbacks stay function props (`reset`, `onPageChange`). Every component accepts a `class` prop.",svelte:"ComboBox exposes `bind:value`; slots are snippets (`icon`, `action`, `empty`, `fallback`). Every component accepts a `class` prop.",vanilla:"Patterns are factory functions — `createComboBox`, `createDataTable` — that return a DOM node plus setters (`setValue`, `setRows`, `setState`). Every factory accepts a `class` option that is merged with its base classes.",angular:"Inputs are signal inputs, ComboBox uses a two-way `[(value)]` model, and recovery is `[recoverable]` plus `(retry)`. Base classes come from a host binding, so a `class` on the element is merged, not replaced."};function ei(e){return e.split(",")[0].replace(/["']/g,"").trim()}function el(e,t){let a=H(e,t),o=a>=7?"AAA":a>=4.5?"AA":a>=3?"AA Large":"below AA";return`${a.toFixed(2)}:1 (${o})`}let ec={instrument:"utilitarian and precise",editorial:"editorial and considered",system:"familiar and direct"},ed={sharp:"crisp corners",soft:"softly rounded corners",round:"fully rounded corners"},ep={airy:"generous spacing that gives each decision room",balanced:"a balanced rhythm that stays readable while showing enough at once",dense:"information-dense layouts that fit more signal per screen"},eu={flat:"Elevation is deliberately absent: hierarchy comes from borders, spacing, and surface color",soft:"Elevation is gentle and diffused",layered:"Elevation is layered, stacking a tight shadow under a wider one"},em={reduced:"motion is suppressed to zero-duration transitions",subtle:"motion is quick and purposeful",expressive:"motion is eased and noticeable without being decorative"},eh=[["background","Background","Page background"],["foreground","Foreground","Body text"],["card","Card","Card and panel surfaces"],["cardForeground","Card Foreground","Text on cards"],["popover","Popover","Menus, popovers, command palettes"],["popoverForeground","Popover Foreground","Text inside popovers"],["muted","Muted","Subdued fills, table headers, hover rows"],["mutedForeground","Muted Foreground","Secondary and helper text"],["border","Border","Dividers and component borders"],["input","Input","Form control borders"],["ring","Ring","Focus rings"],["destructive","Destructive","Destructive actions and error surfaces"],["success","Success","Confirmed and healthy states"],["warning","Warning","Pending and caution states"],["info","Info","Informational states"]];function eg(e){return eh.map(([t,a,o])=>`- **${a}** (${e[t]}): ${o}`).join("\n")}function ey(e){let t=e.projectName.trim()||"Untitled project",a=g[e.framework],o=b(e.framework),s=es[e.projectType],r=W(e),n=et(e.projectType),i=Z.filter(e=>n.includes(e.key)),l=er(e.projectType,n),c=r.spacing.space,d=r.shape.radius,u=ei(r.typography.heading),m=ei(r.typography.sans),h=ei(r.typography.mono),y="flat"===e.shadowStyle?"No shadows are defined. Separate surfaces with `border`, spacing, and `muted` fills instead of depth.":`- **sm** \`var(--shadow-sm)\`: ${r.shape.sm}. Buttons, chips, resting cards.
- **md** \`var(--shadow-md)\`: ${r.shape.md}. Raised cards, popovers, dropdowns.
- **lg** \`var(--shadow-lg)\`: ${r.shape.lg}. Dialogs, sheets, command palettes.`,f=[...s.guardrails,...a.guardrails];return`# ${t} Design System

Generated by Forge for **${a.stackLabel}** with **${o.name}**. Project type: ${p[e.projectType]}.

## Overview

${t} is ${ec[e.typeVoice]}, using ${ed[e.radius]} and ${ep[e.density]}. ${eu[e.shadowStyle]}, and ${em[e.motionStyle]}. The signal color \`${e.primary}\` carries primary actions against neutral surfaces, with \`${e.secondary}\` and \`${e.accent}\` in support.

Every value below exists as a CSS variable in \`${a.layout.styles}\`. Components read the variables; they never hardcode a brand hex. The same variable names are generated for every framework Forge supports, so this document travels with the decisions rather than the stack.

---

## Colors

### Brand signals

- **Primary** (${e.primary}): Primary actions, active states, focus ring. Text on it: ${G(e.primary)}
- **Secondary** (${e.secondary}): Supporting surfaces and secondary actions. Text on it: ${G(e.secondary)}
- **Accent** (${e.accent}): Highlights and emphasis, used sparingly. Text on it: ${G(e.accent)}

### Light theme

${eg(r.light)}

### Dark theme

${eg(r.dark)}

### Measured contrast

- Body text on background: ${el(r.light.foreground,r.light.background)} light, ${el(r.dark.foreground,r.dark.background)} dark
- Text on primary: ${el(G(e.primary),e.primary)}
- Text on secondary: ${el(G(e.secondary),e.secondary)}
- Text on accent: ${el(G(e.accent),e.accent)}
- Muted foreground on background: ${el(r.light.mutedForeground,r.light.background)} light, ${el(r.dark.mutedForeground,r.dark.background)} dark

Foreground colors are chosen automatically for the strongest contrast against each brand color. Any new color must clear 4.5:1 for body text and 3:1 for large text and interactive boundaries.

## Typography

- **Headline Font**: ${u}${e.headingFont?" (Google Fonts)":""}
- **Body Font**: ${m}${e.bodyFont?" (Google Fonts)":""}
- **Mono Font**: ${h}
${e.headingFont||e.bodyFont?`
The webfonts are imported at the top of \`${a.layout.styles}\`; keep that import first, because CSS requires it before any other rule.
`:""}

\`\`\`css
--font-heading: ${r.typography.heading};
--font-sans: ${r.typography.sans};
--font-mono: ${r.typography.mono};
\`\`\`

${r.typeScale.map(e=>`- **${e.label}** (\`text-${e.key}\`): ${ei(r.typography[e.role])} ${U(e.size)} / ${e.weight}, ${e.lineHeight} line height — ${e.usage}`).join("\n")}

The scale is sized by the chosen density (${e.density}). Each step is a Tailwind theme key, so \`text-h1\` and \`text-body-sm\` are real utilities in this project.

---

## Spacing

Base unit: **${U(c)}** (\`--space-unit\`)

${[["xs",1,"Inline icon gaps"],["sm",2,"Tight component padding"],["md",4,"Default padding"],["lg",6,"Card padding"],["xl",8,"Section gaps"],["2xl",12,"Layout sections"],["3xl",16,"Page-level spacing"]].map(([e,t,a])=>`- **${e}**: ${U(c,t)} — ${a}`).join("\n")}

- **Control height**: ${U(r.spacing.control)} (\`--control-height\`) — every button, input, and select shares it
- **Section gap**: ${U(r.spacing.section)} (\`--section-gap\`) — vertical rhythm between sections

## Border Radius

Base radius: **${U(d)}** (\`--radius\`)

${K.map(e=>`- **${e.name}** (${V(d,e)}${e.cap&&Number.parseFloat(U(d,e.factor))>e.cap?`, capped from ${U(d,e.factor)}`:""}): ${e.usage}`).join("\n")}
- **full** (9999px): Avatars, status dots, pills

## Elevation

${y}

## Motion

- **Fast**: ${r.motion.fast} (\`--motion-fast\`) — hovers, focus, color changes
- **Normal**: ${r.motion.normal} (\`--motion-normal\`) — popovers, sheets, list transitions
- **Easing**: \`${r.motion.easing}\` (\`--motion-easing\`)

Durations collapse to \`0ms\` under \`prefers-reduced-motion: reduce\`, which the generated stylesheet already handles. Never animate a value the user cannot opt out of.

---

## Components

### Primitives

${o.cliPackage?`Installed from ${o.name} into \`${a.layout.uiDir}\`: ${l.join(", ")}.`:`Hand-written in \`${a.layout.uiDir}\`: button, card, input, and badge factories. There is no component CLI, so this layer is yours from the first commit.`}

These are owned source. Edit them in place rather than wrapping them in a second abstraction.

### Buttons

- **Primary**: \`primary\` fill, \`primary-foreground\` text, no border. Hover drops opacity to 90%.
- **Secondary**: \`secondary\` fill, \`secondary-foreground\` text, no border.
- **Outline**: transparent fill, \`foreground\` text, 1px \`border\`. Hover fills with \`muted\`.
- **Ghost**: transparent fill, \`muted-foreground\` text, no border. Hover fills with \`muted\`.
- **Destructive**: \`destructive\` fill, \`destructive-foreground\` text, no border.

Sizes step from the control height: **sm** ${U(r.spacing.control,.85)}, **md** ${U(r.spacing.control)}, **lg** ${U(r.spacing.control,1.15)}. Radius \`--radius-md\` (${U(d,.8)}). Disabled is 50% opacity with hover and focus suppressed; focus is always a visible 2px \`ring\`.

### Cards

\`card\` fill, \`card-foreground\` text, 1px \`border\`, radius \`--radius-lg\` (${U(d,1)}), padding ${U(c,6)}${"flat"===e.shadowStyle?", no shadow":", `--shadow-sm` at rest and `--shadow-md` when raised"}.

### Inputs

Height ${U(r.spacing.control)}, 1px \`input\` border, \`background\` fill, radius \`--radius-md\` (${U(d,.8)}).

- **Focus**: 2px \`ring\`
- **Error**: \`destructive\` border with \`destructive\` helper text
- **Disabled**: \`muted\` fill at 50% opacity
- **Label**: \`text-caption\` weight 500; **helper text**: \`text-body-sm\` in \`muted-foreground\`

### Status and badges

Status colors are tinted, never solid, on surfaces: \`success\`, \`warning\`, \`info\`, and \`destructive\` at low opacity for the fill with the full color for text. Badge type is \`text-caption\`, radius \`--radius-sm\` (${U(d,.6)}).

### Forge patterns

Reusable product behavior in \`${a.layout.patternsDir}\`. Each one must keep the states listed here.

| Component | Purpose | Required states |
| --- | --- | --- |
${i.map(e=>`| ${e.label} | ${e.description} | ${e.states.join(", ")} |`).join("\n")}

DataTable depends on SuspenseContainer; SuspenseContainer owns EmptyState and ErrorState. ToastProvider mounts once in the application shell.

**API on ${a.label}:** ${en[a.family]}

## Composition

${s.name}: ${s.composition}

Expected surfaces:

${s.components.map(e=>`- ${e}`).join("\n")}

---

## Do's and Don'ts

1. **Do** use semantic variables — \`background\`, \`foreground\`, \`primary\`, \`border\`, \`ring\`, \`success\`, \`warning\`, \`info\` — for every component color.
2. **Don't** hardcode a brand hex in a component. The brand colors are inputs to the token system, not component values.
3. **Do** keep the four layers separate: foundations, ${o.name} primitives, Forge patterns, then route compositions. Lower layers never import from higher ones.
4. **Do** design loading, empty, error, success, and disabled states alongside the happy path; every data surface needs them.
5. **Don't** add gradients, decorative animation, invented testimonials, fake metrics, or new fonts without updating this document first.
6. **Do** keep every interactive control keyboard-operable with a visible focus ring, and honor \`prefers-reduced-motion\`.
7. **Do** check both themes and all three widths — narrow mobile, tablet, wide desktop — before calling a surface done.
8. **Don't** introduce a second spacing or radius scale. If a value is missing, extend the tokens rather than reaching for an arbitrary number.

### For ${s.name.toLowerCase()} work on ${a.label}

${f.map(e=>`- ${e}`).join("\n")}
`}let ef=".claude/skills/website-build/SKILL.md";var eb=a(602);let ev={"class-variance-authority":"^0.7.1",clsx:"^2.1.1","tailwind-merge":"^3.3.0",tailwindcss:"^4.3.3","tw-animate-css":"^1.4.0","@tailwindcss/postcss":"^4.3.3","@tailwindcss/vite":"^4.3.3",typescript:"^5.9.0",vite:"^8.3.0","@types/node":"^22",zod:"^3.25.0",motion:"^12.0.0",next:"16.3.2",react:"19.2.3","react-dom":"19.2.3","@types/react":"^19","@types/react-dom":"^19","@vitejs/plugin-react":"^6.1.1",shadcn:"^4.21.0","radix-ui":"^1.6.7",cmdk:"^1.1.1","lucide-react":"^1.47.0",sonner:"^2.0.0",recharts:"^3.0.0","react-hook-form":"^7.60.0","@tanstack/react-query":"^5.90.0","react-router":"^8.4.0","@react-router/dev":"^8.4.0","@react-router/node":"^8.4.0","@react-router/serve":"^8.4.0",isbot:"^5.2.2","vite-tsconfig-paths":"^6.1.1","@tanstack/react-start":"^1.168.56","@tanstack/react-router":"^1.170.38",astro:"^7.3.3","@astrojs/react":"^6.0.6",vue:"^3.5.43","vue-tsc":"^3.3.11","@vueuse/core":"^15.0.0","@vitejs/plugin-vue":"^6.0.9","@vue/tsconfig":"^0.9.1","shadcn-vue":"^2.8.2","shadcn-nuxt":"^2.8.2","reka-ui":"^2.10.4",nuxt:"^4.5.2","@lucide/vue":"^1.47.0","vue-sonner":"^2.0.9","vue-chartjs":"^5.3.4","vee-validate":"^4.15.1","@tanstack/vue-query":"^5.103.1",svelte:"^5.57.0","svelte-check":"^4.7.6","@sveltejs/kit":"^2.70.3","@sveltejs/adapter-auto":"^7.0.1","@sveltejs/vite-plugin-svelte":"^7.3.0","shadcn-svelte":"^1.7.0","bits-ui":"^2.19.2","tailwind-variants":"^3.3.1","@lucide/svelte":"^1.47.0","svelte-sonner":"^1.2.1",layerchart:"^2.5.0","sveltekit-superforms":"^2.30.2","@tanstack/svelte-query":"^6.2.1","@angular/animations":"^22.1.7","@angular/cdk":"^22.1.7","@angular/common":"^22.1.7","@angular/compiler":"^22.1.7","@angular/core":"^22.1.7","@angular/forms":"^22.1.7","@angular/platform-browser":"^22.1.7","@angular/router":"^22.1.7","@angular/build":"^22.1.8","@angular/cli":"^22.1.8","@angular/compiler-cli":"^22.1.7","@spartan-ng/brain":"^1.4.1","@spartan-ng/cli":"^1.4.1",rxjs:"^7.8.2",tslib:"^2.8.1","@tanstack/angular-query-experimental":"^5.103.1","ngx-sonner":"^3.1.0","@ng-icons/core":"^36.0.0","@ng-icons/lucide":"^36.0.0",lucide:"^1.47.0","ng2-charts":"^10.0.0","chart.js":"^4.5.1","typescript@angular":"~6.0.3"},ex={react:{"lucide-react":["lucide-react"],sonner:["sonner"],recharts:["recharts"],zod:["zod"],"react-hook-form":["react-hook-form"],"@tanstack/react-query":["@tanstack/react-query"],motion:["motion"]},vue:{"lucide-react":["@lucide/vue"],sonner:["vue-sonner"],recharts:["chart.js","vue-chartjs"],zod:["zod"],"react-hook-form":["vee-validate"],"@tanstack/react-query":["@tanstack/vue-query"],motion:["motion"]},svelte:{"lucide-react":["@lucide/svelte"],sonner:["svelte-sonner"],recharts:["layerchart"],zod:["zod"],"react-hook-form":["sveltekit-superforms"],"@tanstack/react-query":["@tanstack/svelte-query"],motion:["motion"]},vanilla:{"lucide-react":["lucide"],sonner:[],recharts:["chart.js"],zod:["zod"],"react-hook-form":[],"@tanstack/react-query":[],motion:["motion"]},angular:{"lucide-react":["@ng-icons/core","@ng-icons/lucide"],sonner:["ngx-sonner"],recharts:["chart.js","ng2-charts"],zod:["zod"],"react-hook-form":[],"@tanstack/react-query":["@tanstack/angular-query-experimental"],motion:[]}};function ew(e,t){let a=ex[e];return Array.from(new Set(t.flatMap(e=>a[e]??[e])))}let eS={react:"sonner",vue:"vue-sonner",svelte:"svelte-sonner",angular:"ngx-sonner",vanilla:null};function ek(e){return e.replace(/\/patterns$/,"")}function eN(e,t={}){let a={};for(let o of Array.from(new Set(e)).sort())a[o]=t[o]??ev[o]??"latest";return a}function eC(e){return`${JSON.stringify(e,null,2)}
`}function ej(e){return eC({name:e.slug,version:"0.1.0",private:!0,...e.extra,scripts:e.scripts,dependencies:e.dependencies,devDependencies:e.devDependencies})}function eT(e,t={}){let a=t.shadcnLayer?`@import "shadcn/tailwind.css";
`:"";return`${J(e.state)}@import "tailwindcss";
@import "tw-animate-css";
${a}
@custom-variant dark (&:is(.dark *));

${e.themeCss}
@layer base { * { @apply border-border outline-ring/50; } body { @apply bg-background text-foreground; } }
`}let eP=`import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) { return twMerge(clsx(inputs)); }
`;function eM(e=[]){return`${["node_modules","dist",".env",".env.*","!.env.example",".DS_Store","*.log",...e].join("\n")}
`}function eA(e){return"dashboard"===e.state.projectType?"Operations / Overview":"Product / Workspace"}function e$(e){return e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function eD(e){return e.replace(/\\/g,"\\\\").replace(/"/g,'\\"')}function eR(e){let{name:t,state:a,framework:o,hasToast:s}=e,r=o.layout.patternsImport;if("landing"===a.projectType)return`"use client";

import { useState } from "react";
import { ComboBox } from "${r}";

const options = [{ value: "strategy", label: "Product strategy" }, { value: "design", label: "Interface design" }, { value: "engineering", label: "Frontend engineering" }];

export function HomeView() {
  const [focus, setFocus] = useState("");
  return <main className="min-h-screen bg-background text-foreground"><header className="mx-auto flex max-w-6xl items-center justify-between border-b px-6 py-5"><strong>${t}</strong><a className="rounded-md bg-primary px-4 py-2 text-body-sm font-medium text-primary-foreground" href="#contact">Start a project</a></header><section className="mx-auto grid min-h-[68vh] max-w-6xl items-center gap-12 px-6 py-20 md:grid-cols-[1.25fr_.75fr]"><div><p className="mb-5 text-body-sm font-medium text-muted-foreground">A focused system for useful work</p><h1 className="max-w-3xl font-heading text-h1 tracking-tight md:text-display">Make the product feel intentional from the first screen.</h1><p className="mt-7 max-w-2xl text-body-lg text-muted-foreground">This example composition already uses the generated semantic tokens, spacing, radius, and component patterns.</p></div><aside className="rounded-xl border bg-card p-6 shadow-[var(--shadow-md)]"><label className="mb-3 block text-body-sm font-medium">What do you need?</label><ComboBox options={options} value={focus} onValueChange={setFocus} /><p className="mt-4 text-body-sm text-muted-foreground">Selected: {focus || "Nothing yet"}</p></aside></section><section id="contact" className="mx-auto grid max-w-6xl gap-4 border-t px-6 py-16 md:grid-cols-3">{["Clear hierarchy", "Reusable sections", "Accessible states"].map((item) => <article className="rounded-xl border bg-card p-6" key={item}><h2 className="font-medium">{item}</h2><p className="mt-2 text-body-sm text-muted-foreground">A composition layer built from the same documented foundations.</p></article>)}</section></main>;
}
`;let n=s?`import { toast } from "${r}";
`:"";return`"use client";

import { useState } from "react";
${n}import { ComboBox, DataTable, type DataTableColumn } from "${r}";

type Project = { id: string; name: string; status: string; owner: string };
const rows: Project[] = [{ id: "1", name: "Northstar", status: "Ready", owner: "Alex" }, { id: "2", name: "Harbor", status: "Review", owner: "Mina" }, { id: "3", name: "Field notes", status: "Draft", owner: "Sam" }];
const columns: DataTableColumn<Project>[] = [{ key: "name", header: "Project", sortable: true }, { key: "status", header: "Status" }, { key: "owner", header: "Owner" }];

export function HomeView() {
  const [filter, setFilter] = useState("");
  return <main className="min-h-screen bg-background text-foreground"><header className="flex items-center justify-between border-b px-6 py-4"><strong>${t}</strong><button className="rounded-md bg-primary px-4 py-2 text-body-sm font-medium text-primary-foreground" ${s?'onClick={() => toast.success("Project created")}':'type="button"'}>New project</button></header><div className="mx-auto grid max-w-7xl gap-8 px-6 py-10"><div className="flex flex-col justify-between gap-5 md:flex-row md:items-end"><div><p className="text-body-sm text-muted-foreground">${eA(e)}</p><h1 className="mt-2 font-heading text-h1 tracking-tight">Keep the next move visible.</h1></div><div className="w-full md:w-72"><ComboBox options={[{ value: "all", label: "All projects" }, { value: "ready", label: "Ready" }, { value: "draft", label: "Draft" }]} value={filter} onValueChange={setFilter} /></div></div><section className="grid gap-4 md:grid-cols-3">{[["Active signal", "84.6%"], ["Weekly reach", "18,240"], ["Open workflows", "06"]].map(([label, value]) => <article className="rounded-xl border bg-card p-5 shadow-[var(--shadow-sm)]" key={label}><p className="text-body-sm text-muted-foreground">{label}</p><strong className="mt-3 block text-h2">{value}</strong></article>)}</section><DataTable columns={columns} rows={rows} selectable pageSize={5} /></div></main>;
}
`}function eF(e,t){let{framework:a}=e;return eC({$schema:"https://ui.shadcn.com/schema.json",style:"radix-nova",rsc:t.rsc,tsx:!0,tailwind:{css:a.layout.styles,baseColor:"neutral",cssVariables:!0},iconLibrary:"lucide",aliases:{components:`${t.aliasRoot}/components`,utils:`${t.aliasRoot}/lib/utils`,ui:`${t.aliasRoot}/components/ui`,lib:`${t.aliasRoot}/lib`,hooks:`${t.aliasRoot}/hooks`}})}function eB(e,t){return eN(["class-variance-authority","clsx","radix-ui","tailwind-merge",...e.patternKeys.includes("combo-box")?["cmdk"]:[],...t,...e.packages])}let eE=["@types/react","@types/react-dom"],eO=`${eP}
export type WithoutChild<T> = T extends { child?: unknown } ? Omit<T, "child"> : T;
export type WithoutChildren<T> = T extends { children?: unknown } ? Omit<T, "children"> : T;
export type WithoutChildrenOrChild<T> = WithoutChildren<WithoutChild<T>>;
export type WithElementRef<T, U extends HTMLElement = HTMLElement> = T & { ref?: U | null };
`,eL=`import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Merges class names, resolving conflicting Tailwind utilities.
 * @param {...import("clsx").ClassValue} inputs
 * @returns {string}
 */
export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

/**
 * Creates an element. \`class\` sets className, \`on*\` keys become listeners,
 * \`true\` becomes a bare attribute, and null or false values are skipped.
 * @param {string} tag
 * @param {Record<string, unknown>} [attributes]
 * @param {(Node | string | null | undefined | false)[]} [children]
 * @returns {HTMLElement}
 */
export function el(tag, attributes = {}, children = []) {
  const node = document.createElement(tag);
  for (const [key, value] of Object.entries(attributes)) {
    if (value === null || value === undefined || value === false) continue;
    if (key === "class") node.className = String(value);
    else if (key.startsWith("on") && typeof value === "function") node.addEventListener(key.slice(2).toLowerCase(), /** @type {EventListener} */ (value));
    else if (value === true) node.setAttribute(key, "");
    else node.setAttribute(key, String(value));
  }
  for (const child of children) {
    if (child === null || child === undefined || child === false) continue;
    node.append(child);
  }
  return node;
}

/**
 * Finds a mount point declared in the HTML.
 * @param {string} name
 * @returns {HTMLElement}
 */
export function mount(name) {
  const target = document.querySelector('[data-mount="' + name + '"]');
  if (!(target instanceof HTMLElement)) throw new Error('Missing mount point: ' + name);
  return target;
}
`,eI=`import { cn, el } from "../lib/utils.js";

/** @typedef {"primary" | "secondary" | "outline" | "ghost" | "destructive"} ButtonVariant */

const BUTTON_VARIANTS = {
  primary: "bg-primary text-primary-foreground hover:opacity-90",
  secondary: "bg-secondary text-secondary-foreground hover:opacity-90",
  outline: "border bg-transparent text-foreground hover:bg-muted",
  ghost: "bg-transparent text-muted-foreground hover:bg-muted",
  destructive: "bg-destructive text-destructive-foreground hover:opacity-90",
};

const BUTTON_SIZES = {
  sm: "min-h-[calc(var(--control-height)*0.85)] px-3 text-body-sm",
  md: "min-h-[var(--control-height)] px-5 text-body-sm",
  lg: "min-h-[calc(var(--control-height)*1.15)] px-7 text-body",
};

/**
 * @param {{ label: string; variant?: ButtonVariant; size?: "sm" | "md" | "lg"; type?: string; onClick?: () => void; disabled?: boolean; class?: string }} options
 * @returns {HTMLElement}
 */
export function button({ label, variant = "primary", size = "md", type = "button", onClick, disabled = false, class: className }) {
  const node = el(
    "button",
    {
      type,
      class: cn(
        "inline-flex items-center justify-center gap-2 rounded-md font-medium transition-colors duration-[var(--motion-fast)]",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",
        BUTTON_VARIANTS[variant],
        BUTTON_SIZES[size],
        className,
      ),
      onclick: onClick,
    },
    [label],
  );
  if (disabled) node.setAttribute("disabled", "");
  return node;
}

/**
 * @param {{ children?: (Node | string)[]; class?: string; raised?: boolean }} [options]
 * @returns {HTMLElement}
 */
export function card({ children = [], class: className, raised = false } = {}) {
  return el(
    "div",
    { class: cn("rounded-lg border bg-card p-6 text-card-foreground", raised ? "shadow-[var(--shadow-md)]" : "shadow-[var(--shadow-sm)]", className) },
    children,
  );
}

/**
 * @param {{ id?: string; type?: string; placeholder?: string; invalid?: boolean; class?: string }} [options]
 * @returns {HTMLElement}
 */
export function input({ id, type = "text", placeholder, invalid = false, class: className } = {}) {
  return el("input", {
    id,
    type,
    placeholder,
    "aria-invalid": invalid ? "true" : null,
    class: cn(
      "min-h-[var(--control-height)] w-full rounded-md border border-input bg-background px-3 text-body-sm",
      "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:opacity-50",
      invalid && "border-destructive focus-visible:ring-destructive",
      className,
    ),
  });
}

/**
 * @param {{ label: string; tone?: "neutral" | "success" | "warning" | "info" | "destructive"; class?: string }} options
 * @returns {HTMLElement}
 */
export function badge({ label, tone = "neutral", class: className }) {
  const tones = {
    neutral: "bg-muted text-muted-foreground",
    success: "bg-success/15 text-success",
    warning: "bg-warning/15 text-warning",
    info: "bg-info/15 text-info",
    destructive: "bg-destructive/15 text-destructive",
  };
  return el("span", { class: cn("inline-flex items-center rounded-sm px-2 py-0.5 text-caption", tones[tone], className) }, [label]);
}
`;function ez(e){let{name:t,state:a,framework:o,hasToast:s}=e,r=o.layout.patternsImport;if("landing"===a.projectType)return`<script setup lang="ts">
import { ref } from "vue";
import { ComboBox } from "${r}";

const options = [
  { value: "strategy", label: "Product strategy" },
  { value: "design", label: "Interface design" },
  { value: "engineering", label: "Frontend engineering" },
];
const cards = ["Clear hierarchy", "Reusable sections", "Accessible states"];
const focus = ref("");
</script>

<template>
  <main class="min-h-screen bg-background text-foreground">
    <header class="mx-auto flex max-w-6xl items-center justify-between border-b px-6 py-5">
      <strong>${t}</strong>
      <a class="rounded-md bg-primary px-4 py-2 text-body-sm font-medium text-primary-foreground" href="#contact">Start a project</a>
    </header>
    <section class="mx-auto grid min-h-[68vh] max-w-6xl items-center gap-12 px-6 py-20 md:grid-cols-[1.25fr_.75fr]">
      <div>
        <p class="mb-5 text-body-sm font-medium text-muted-foreground">A focused system for useful work</p>
        <h1 class="max-w-3xl font-heading text-h1 tracking-tight md:text-display">Make the product feel intentional from the first screen.</h1>
        <p class="mt-7 max-w-2xl text-body-lg text-muted-foreground">This example composition already uses the generated semantic tokens, spacing, radius, and component patterns.</p>
      </div>
      <aside class="rounded-xl border bg-card p-6 shadow-[var(--shadow-md)]">
        <label class="mb-3 block text-body-sm font-medium">What do you need?</label>
        <ComboBox v-model="focus" :options="options" />
        <p class="mt-4 text-body-sm text-muted-foreground">Selected: {{ focus || "Nothing yet" }}</p>
      </aside>
    </section>
    <section id="contact" class="mx-auto grid max-w-6xl gap-4 border-t px-6 py-16 md:grid-cols-3">
      <article v-for="card in cards" :key="card" class="rounded-xl border bg-card p-6">
        <h2 class="font-medium">{{ card }}</h2>
        <p class="mt-2 text-body-sm text-muted-foreground">A composition layer built from the same documented foundations.</p>
      </article>
    </section>
  </main>
</template>
`;let n=s?`import { ComboBox, DataTable, toast, type DataTableColumn } from "${r}";`:`import { ComboBox, DataTable, type DataTableColumn } from "${r}";`;return`<script setup lang="ts">
import { ref } from "vue";
${n}

type Project = { id: string; name: string; status: string; owner: string };

const rows: Project[] = [
  { id: "1", name: "Northstar", status: "Ready", owner: "Alex" },
  { id: "2", name: "Harbor", status: "Review", owner: "Mina" },
  { id: "3", name: "Field notes", status: "Draft", owner: "Sam" },
];
const columns: DataTableColumn<Project>[] = [
  { key: "name", header: "Project", sortable: true },
  { key: "status", header: "Status" },
  { key: "owner", header: "Owner" },
];
const filters = [
  { value: "all", label: "All projects" },
  { value: "ready", label: "Ready" },
  { value: "draft", label: "Draft" },
];
const stats: Array<[string, string]> = [["Active signal", "84.6%"], ["Weekly reach", "18,240"], ["Open workflows", "06"]];
const filter = ref("");
</script>

<template>
  <main class="min-h-screen bg-background text-foreground">
    <header class="flex items-center justify-between border-b px-6 py-4">
      <strong>${t}</strong>
      <button class="rounded-md bg-primary px-4 py-2 text-body-sm font-medium text-primary-foreground" ${s?"@click=\"toast.success('Project created')\"":'type="button"'}>New project</button>
    </header>
    <div class="mx-auto grid max-w-7xl gap-8 px-6 py-10">
      <div class="flex flex-col justify-between gap-5 md:flex-row md:items-end">
        <div>
          <p class="text-body-sm text-muted-foreground">${eA(e)}</p>
          <h1 class="mt-2 font-heading text-h1 tracking-tight">Keep the next move visible.</h1>
        </div>
        <div class="w-full md:w-72"><ComboBox v-model="filter" :options="filters" /></div>
      </div>
      <section class="grid gap-4 md:grid-cols-3">
        <article v-for="[label, value] in stats" :key="label" class="rounded-xl border bg-card p-5 shadow-[var(--shadow-sm)]">
          <p class="text-body-sm text-muted-foreground">{{ label }}</p>
          <strong class="mt-3 block text-h2">{{ value }}</strong>
        </article>
      </section>
      <DataTable :columns="columns" :rows="rows" selectable :page-size="5" />
    </div>
  </main>
</template>
`}function eH(e,t){return eC({$schema:"https://shadcn-vue.com/schema.json",style:"reka-nova",typescript:!0,tailwind:{css:e.framework.layout.styles,baseColor:"neutral",cssVariables:!0},iconLibrary:"lucide",aliases:{components:`${t}/components`,composables:`${t}/composables`,utils:`${t}/lib/utils`,ui:`${t}/components/ui`,lib:`${t}/lib`}})}let eG={next:e=>{let{name:t,slug:a,themeClass:o,hasToast:s}=e,r=ek(e.framework.layout.patternsDir);return{"package.json":ej({slug:a,scripts:{dev:"next dev",build:"next build",start:"next start",typecheck:"tsc --noEmit"},dependencies:eB(e,["next","react","react-dom"]),devDependencies:eN(["@tailwindcss/postcss","@types/node",...eE,"shadcn","tailwindcss","tw-animate-css","typescript"])}),"tsconfig.json":eC({compilerOptions:{target:"ES2017",lib:["dom","dom.iterable","esnext"],allowJs:!1,skipLibCheck:!0,strict:!0,noEmit:!0,esModuleInterop:!0,module:"esnext",moduleResolution:"bundler",resolveJsonModule:!0,isolatedModules:!0,jsx:"react-jsx",incremental:!0,plugins:[{name:"next"}],paths:{"@/*":["./*"]}},include:["next-env.d.ts","**/*.ts","**/*.tsx",".next/types/**/*.ts"],exclude:["node_modules"]}),"next.config.ts":`import type { NextConfig } from "next";

const nextConfig: NextConfig = {};
export default nextConfig;
`,"postcss.config.mjs":`export default { plugins: { "@tailwindcss/postcss": {} } };
`,"next-env.d.ts":`/// <reference types="next" />
/// <reference types="next/image-types/global" />
`,"components.json":eF(e,{rsc:!0,aliasRoot:"@"}),".gitignore":eM([".next","out","next-env.d.ts"]),"app/globals.css":eT(e,{shadcnLayer:!0}),"app/layout.tsx":`import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "@/components/providers";

export const metadata: Metadata = { title: "${eD(t)}", description: "Generated with Forge" };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en" className="${o}" suppressHydrationWarning><body><Providers>{children}</Providers></body></html>;
}
`,"app/page.tsx":`import { HomeView } from "@/components/home-view";

export default function Page() {
  return <HomeView />;
}
`,[`${r}/home-view.tsx`]:eR(e),"components/providers.tsx":`"use client";

${s?`import { ToastProvider } from "${e.framework.layout.patternsImport}";
`:""}
export function Providers({ children }: { children: React.ReactNode }) {
  return <>{children}${s?"<ToastProvider />":""}</>;
}
`,"lib/utils.ts":eP}},"react-vite":e=>{let{name:t,slug:a,themeClass:o,hasToast:s}=e,r=ek(e.framework.layout.patternsDir);return{"package.json":ej({slug:a,extra:{type:"module"},scripts:{dev:"vite",build:"vite build",preview:"vite preview",typecheck:"tsc --noEmit"},dependencies:eB(e,["react","react-dom"]),devDependencies:eN(["@tailwindcss/vite","@types/node",...eE,"@vitejs/plugin-react","shadcn","tailwindcss","tw-animate-css","typescript","vite"])}),"tsconfig.json":eC({compilerOptions:{target:"ES2022",lib:["ES2022","DOM","DOM.Iterable"],module:"ESNext",moduleResolution:"bundler",jsx:"react-jsx",strict:!0,noEmit:!0,skipLibCheck:!0,esModuleInterop:!0,resolveJsonModule:!0,isolatedModules:!0,types:["vite/client"],baseUrl:".",paths:{"@/*":["./src/*"]}},include:["src"]}),"vite.config.ts":`import { fileURLToPath } from "node:url";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: { alias: { "@": fileURLToPath(new URL("./src", import.meta.url)) } },
});
`,"index.html":`<!doctype html>
<html lang="en" class="${o}">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>${t}</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>
`,"components.json":eF(e,{rsc:!1,aliasRoot:"@"}),".gitignore":eM(["dist-ssr","*.local"]),"src/index.css":eT(e,{shadcnLayer:!0}),"src/main.tsx":`import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

createRoot(document.getElementById("root")!).render(<StrictMode><App /></StrictMode>);
`,"src/App.tsx":`import { HomeView } from "@/components/home-view";
${s?`import { ToastProvider } from "${e.framework.layout.patternsImport}";
`:""}
export default function App() {
  return <><HomeView />${s?"<ToastProvider />":""}</>;
}
`,[`${r}/home-view.tsx`]:eR(e),"src/lib/utils.ts":eP}},"react-router":e=>{let{name:t,slug:a,themeClass:o,hasToast:s}=e,r=ek(e.framework.layout.patternsDir),n=s?`
        <ToastProvider />`:"";return{"package.json":ej({slug:a,extra:{type:"module"},scripts:{dev:"react-router dev",build:"react-router build",start:"react-router-serve ./build/server/index.js",typecheck:"react-router typegen && tsc --noEmit"},dependencies:eB(e,["@react-router/node","@react-router/serve","isbot","react","react-dom","react-router"]),devDependencies:eN(["@react-router/dev","@tailwindcss/vite","@types/node",...eE,"shadcn","tailwindcss","tw-animate-css","typescript","vite","vite-tsconfig-paths"])}),"tsconfig.json":eC({compilerOptions:{target:"ES2022",lib:["DOM","DOM.Iterable","ES2022"],module:"ESNext",moduleResolution:"bundler",jsx:"react-jsx",strict:!0,noEmit:!0,skipLibCheck:!0,esModuleInterop:!0,resolveJsonModule:!0,isolatedModules:!0,types:["node","vite/client"],rootDirs:[".","./.react-router/types"],baseUrl:".",paths:{"~/*":["./app/*"]}},include:["**/*.ts","**/*.tsx",".react-router/types/**/*"]}),"react-router.config.ts":`import type { Config } from "@react-router/dev/config";

export default { ssr: true } satisfies Config;
`,"vite.config.ts":`import { reactRouter } from "@react-router/dev/vite";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({ plugins: [tailwindcss(), reactRouter(), tsconfigPaths()] });
`,"components.json":eF(e,{rsc:!1,aliasRoot:"~"}),".gitignore":eM(["build",".react-router"]),"app/app.css":eT(e,{shadcnLayer:!0}),"app/root.tsx":`import type { ReactNode } from "react";
import { Links, Meta, Outlet, Scripts, ScrollRestoration } from "react-router";
${s?`import { ToastProvider } from "${e.framework.layout.patternsImport}";
`:""}import "./app.css";

export function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className="${o}">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        {children}${n}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}
`,"app/routes.ts":`import { index, type RouteConfig } from "@react-router/dev/routes";

export default [index("routes/home.tsx")] satisfies RouteConfig;
`,"app/routes/home.tsx":`import { HomeView } from "~/components/home-view";

export function meta() {
  return [{ title: "${eD(t)}" }, { name: "description", content: "Generated with Forge" }];
}

export default function Home() {
  return <HomeView />;
}
`,[`${r}/home-view.tsx`]:eR(e),"app/lib/utils.ts":eP}},"tanstack-start":e=>{let{name:t,slug:a,themeClass:o,hasToast:s}=e,r=ek(e.framework.layout.patternsDir),n=s?`
        <ToastProvider />`:"";return{"package.json":ej({slug:a,extra:{type:"module"},scripts:{dev:"vite dev",build:"vite build",start:"node .output/server/index.mjs",typecheck:"tsc --noEmit"},dependencies:eB(e,["@tanstack/react-router","@tanstack/react-start","react","react-dom"]),devDependencies:eN(["@tailwindcss/vite","@types/node",...eE,"@vitejs/plugin-react","shadcn","tailwindcss","tw-animate-css","typescript","vite","vite-tsconfig-paths"])}),"tsconfig.json":eC({compilerOptions:{target:"ES2022",lib:["DOM","DOM.Iterable","ES2022"],module:"ESNext",moduleResolution:"bundler",jsx:"react-jsx",strict:!0,noEmit:!0,skipLibCheck:!0,esModuleInterop:!0,resolveJsonModule:!0,isolatedModules:!0,types:["node","vite/client"],baseUrl:".",paths:{"@/*":["./src/*"]}},include:["**/*.ts","**/*.tsx"]}),"vite.config.ts":`import tailwindcss from "@tailwindcss/vite";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import viteReact from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({ plugins: [tsconfigPaths(), tailwindcss(), tanstackStart(), viteReact()] });
`,"components.json":eF(e,{rsc:!1,aliasRoot:"@"}),".gitignore":eM([".output",".nitro",".tanstack","src/routeTree.gen.ts"]),"src/styles/app.css":eT(e,{shadcnLayer:!0}),"src/routes/__root.tsx":`import { createRootRoute, HeadContent, Outlet, Scripts } from "@tanstack/react-router";
${s?`import { ToastProvider } from "${e.framework.layout.patternsImport}";
`:""}import appCss from "@/styles/app.css?url";

export const Route = createRootRoute({
  head: () => ({
    meta: [{ charSet: "utf-8" }, { name: "viewport", content: "width=device-width, initial-scale=1" }, { title: "${eD(t)}" }],
    links: [{ rel: "stylesheet", href: appCss }],
  }),
  component: RootDocument,
});

function RootDocument() {
  return (
    <html lang="en" className="${o}">
      <head>
        <HeadContent />
      </head>
      <body>
        <Outlet />${n}
        <Scripts />
      </body>
    </html>
  );
}
`,"src/router.tsx":`import { createRouter } from "@tanstack/react-router";
import { routeTree } from "./routeTree.gen";

export function getRouter() {
  return createRouter({ routeTree, defaultPreload: "intent" });
}

declare module "@tanstack/react-router" {
  interface Register {
    router: ReturnType<typeof getRouter>;
  }
}
`,"src/routes/index.tsx":`import { createFileRoute } from "@tanstack/react-router";
import { HomeView } from "@/components/home-view";

export const Route = createFileRoute("/")({ component: HomeView });
`,[`${r}/home-view.tsx`]:eR(e),"src/lib/utils.ts":eP}},astro:e=>{let{name:t,slug:a,themeClass:o,hasToast:s}=e,r=ek(e.framework.layout.patternsDir),n=s?`
    <ToastProvider client:idle />`:"",i=s?`import { ToastProvider } from "${e.framework.layout.patternsImport}";
`:"";return{"package.json":ej({slug:a,extra:{type:"module"},scripts:{dev:"astro dev",build:"astro build",preview:"astro preview",typecheck:"astro check"},dependencies:eB(e,["@astrojs/react","astro","react","react-dom"]),devDependencies:eN(["@tailwindcss/vite","@types/node",...eE,"shadcn","tailwindcss","tw-animate-css","typescript"])}),"tsconfig.json":eC({extends:"astro/tsconfigs/strict",compilerOptions:{jsx:"react-jsx",jsxImportSource:"react",baseUrl:".",paths:{"@/*":["./src/*"]}},include:[".astro/types.d.ts","**/*"],exclude:["dist"]}),"astro.config.mjs":`import react from "@astrojs/react";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";

export default defineConfig({
  integrations: [react()],
  vite: { plugins: [tailwindcss()] },
});
`,"components.json":eF(e,{rsc:!1,aliasRoot:"@"}),".gitignore":eM([".astro"]),"src/styles/global.css":eT(e,{shadcnLayer:!0}),"src/pages/index.astro":`---
import "@/styles/global.css";
import { HomeView } from "@/components/home-view";
${i}---

<!doctype html>
<html lang="en" class="${o}">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>${t}</title>
    <meta name="description" content="Generated with Forge" />
  </head>
  <body>
    <HomeView client:load />${n}
  </body>
</html>
`,[`${r}/home-view.tsx`]:eR(e),"src/lib/utils.ts":eP}},"vue-vite":e=>{let{name:t,slug:a,themeClass:o,hasToast:s}=e,r=ek(e.framework.layout.patternsDir),n=e.framework.layout.patternsImport;return{"package.json":ej({slug:a,extra:{type:"module"},scripts:{dev:"vite",build:"vite build",preview:"vite preview",typecheck:"vue-tsc --noEmit"},dependencies:eN(["@vueuse/core","class-variance-authority","clsx","reka-ui","tailwind-merge","vue",...e.packages]),devDependencies:eN(["@tailwindcss/vite","@types/node","@vitejs/plugin-vue","shadcn-vue","tailwindcss","tw-animate-css","typescript","vite","vue-tsc"])}),"tsconfig.json":eC({compilerOptions:{target:"ES2022",lib:["ES2022","DOM","DOM.Iterable"],module:"ESNext",moduleResolution:"bundler",jsx:"preserve",strict:!0,noEmit:!0,skipLibCheck:!0,esModuleInterop:!0,resolveJsonModule:!0,isolatedModules:!0,types:["vite/client"],baseUrl:".",paths:{"@/*":["./src/*"]}},include:["src/**/*.ts","src/**/*.d.ts","src/**/*.vue"]}),"vite.config.ts":`import { fileURLToPath } from "node:url";
import tailwindcss from "@tailwindcss/vite";
import vue from "@vitejs/plugin-vue";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [vue(), tailwindcss()],
  resolve: { alias: { "@": fileURLToPath(new URL("./src", import.meta.url)) } },
});
`,"index.html":`<!doctype html>
<html lang="en" class="${o}">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>${t}</title>
  </head>
  <body>
    <div id="app"></div>
    <script type="module" src="/src/main.ts"></script>
  </body>
</html>
`,"components.json":eH(e,"@"),".gitignore":eM(["dist-ssr","*.local"]),"src/env.d.ts":`/// <reference types="vite/client" />
`,"src/assets/index.css":eT(e),"src/main.ts":`import { createApp } from "vue";
import App from "./App.vue";
import "./assets/index.css";

createApp(App).mount("#app");
`,"src/App.vue":`<script setup lang="ts">
import HomeView from "@/components/HomeView.vue";
${s?`import { ToastProvider } from "${n}";
`:""}</script>

<template>
  <HomeView />
${s?"  <ToastProvider />\n":""}</template>
`,[`${r}/HomeView.vue`]:ez(e),"src/lib/utils.ts":eP}},nuxt:e=>{let{name:t,slug:a,themeClass:o,hasToast:s}=e,r=ek(e.framework.layout.patternsDir),n=e.framework.layout.patternsImport;return{"package.json":ej({slug:a,extra:{type:"module"},scripts:{build:"nuxt build",dev:"nuxt dev",generate:"nuxt generate",preview:"nuxt preview",postinstall:"nuxt prepare",typecheck:"nuxt typecheck"},dependencies:eN(["@vueuse/core","class-variance-authority","clsx","nuxt","reka-ui","tailwind-merge","vue",...e.packages]),devDependencies:eN(["@tailwindcss/vite","shadcn-nuxt","tailwindcss","tw-animate-css","typescript","vue-tsc"])}),"tsconfig.json":eC({files:[],references:[{path:"./.nuxt/tsconfig.app.json"},{path:"./.nuxt/tsconfig.server.json"},{path:"./.nuxt/tsconfig.shared.json"},{path:"./.nuxt/tsconfig.node.json"}]}),"nuxt.config.ts":`import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: "2026-01-01",
  modules: ["shadcn-nuxt"],
  css: ["~/assets/css/main.css"],
  vite: { plugins: [tailwindcss()] },
  app: { head: { title: "${eD(t)}", htmlAttrs: { lang: "en", class: "${o}" }, meta: [{ name: "description", content: "Generated with Forge" }] } },
  shadcn: { prefix: "", componentDir: "./app/components/ui" },
});
`,"components.json":eH(e,"@"),".gitignore":eM([".nuxt",".output",".data",".nitro",".cache"]),"app/assets/css/main.css":eT(e),"app/app.vue":`<script setup lang="ts">
${s?`import { ToastProvider } from "${n}";
`:""}</script>

<template>
  <NuxtPage />
${s?"  <ToastProvider />\n":""}</template>
`,"app/pages/index.vue":`<script setup lang="ts">
import HomeView from "@/components/HomeView.vue";
</script>

<template>
  <HomeView />
</template>
`,[`${r}/HomeView.vue`]:ez(e),"app/lib/utils.ts":eP}},sveltekit:e=>{let{name:t,slug:a,themeClass:o,hasToast:s}=e,r=ek(e.framework.layout.patternsDir),n=e.framework.layout.patternsImport;return{"package.json":ej({slug:a,extra:{type:"module"},scripts:{dev:"vite dev",build:"vite build",preview:"vite preview",prepare:"svelte-kit sync",typecheck:"svelte-kit sync && svelte-check --tsconfig ./tsconfig.json"},dependencies:eN(["bits-ui","clsx","tailwind-merge","tailwind-variants",...e.packages]),devDependencies:eN(["@sveltejs/adapter-auto","@sveltejs/kit","@sveltejs/vite-plugin-svelte","@tailwindcss/vite","shadcn-svelte","svelte","svelte-check","tailwindcss","tw-animate-css","typescript","vite"])}),"tsconfig.json":eC({extends:"./.svelte-kit/tsconfig.json",compilerOptions:{allowJs:!0,checkJs:!0,esModuleInterop:!0,forceConsistentCasingInFileNames:!0,resolveJsonModule:!0,skipLibCheck:!0,sourceMap:!0,strict:!0,moduleResolution:"bundler"}}),"svelte.config.js":`import adapter from "@sveltejs/adapter-auto";
import { vitePreprocess } from "@sveltejs/vite-plugin-svelte";

/** @type {import("@sveltejs/kit").Config} */
export default {
  preprocess: vitePreprocess(),
  kit: { adapter: adapter() },
};
`,"vite.config.ts":`import { sveltekit } from "@sveltejs/kit/vite";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";

export default defineConfig({ plugins: [tailwindcss(), sveltekit()] });
`,"components.json":eC({$schema:"https://shadcn-svelte.com/schema.json",tailwind:{css:e.framework.layout.styles,baseColor:"neutral"},aliases:{components:"$lib/components",utils:"$lib/utils",ui:"$lib/components/ui",hooks:"$lib/hooks",lib:"$lib"},typescript:!0,registry:"https://shadcn-svelte.com/registry"}),".gitignore":eM([".svelte-kit","build",".vercel"]),"src/app.html":`<!doctype html>
<html lang="en" class="${o}">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    %sveltekit.head%
  </head>
  <body data-sveltekit-preload-data="hover">
    <div style="display: contents">%sveltekit.body%</div>
  </body>
</html>
`,"src/app.d.ts":`declare global {
  namespace App {}
}

export {};
`,"src/app.css":eT(e),"src/routes/+layout.svelte":`<script lang="ts">
  import "../app.css";
${s?`  import { ToastProvider } from "${n}";
`:""}
  let { children } = $props();
</script>

{@render children()}
${s?"<ToastProvider />\n":""}`,"src/routes/+page.svelte":`<script lang="ts">
  import HomeView from "$lib/components/home-view.svelte";
</script>

<svelte:head>
  <title>${e$(t)}</title>
  <meta name="description" content="Generated with Forge" />
</svelte:head>

<HomeView />
`,[`${r}/home-view.svelte`]:function(e){let{name:t,state:a,framework:o,hasToast:s}=e,r=o.layout.patternsImport;if("landing"===a.projectType)return`<script lang="ts">
  import { ComboBox } from "${r}";

  const options = [
    { value: "strategy", label: "Product strategy" },
    { value: "design", label: "Interface design" },
    { value: "engineering", label: "Frontend engineering" },
  ];
  const cards = ["Clear hierarchy", "Reusable sections", "Accessible states"];
  let focus = $state("");
</script>

<main class="min-h-screen bg-background text-foreground">
  <header class="mx-auto flex max-w-6xl items-center justify-between border-b px-6 py-5">
    <strong>${e$(t)}</strong>
    <a class="rounded-md bg-primary px-4 py-2 text-body-sm font-medium text-primary-foreground" href="#contact">Start a project</a>
  </header>
  <section class="mx-auto grid min-h-[68vh] max-w-6xl items-center gap-12 px-6 py-20 md:grid-cols-[1.25fr_.75fr]">
    <div>
      <p class="mb-5 text-body-sm font-medium text-muted-foreground">A focused system for useful work</p>
      <h1 class="max-w-3xl font-heading text-h1 tracking-tight md:text-display">Make the product feel intentional from the first screen.</h1>
      <p class="mt-7 max-w-2xl text-body-lg text-muted-foreground">This example composition already uses the generated semantic tokens, spacing, radius, and component patterns.</p>
    </div>
    <aside class="rounded-xl border bg-card p-6 shadow-[var(--shadow-md)]">
      <span class="mb-3 block text-body-sm font-medium">What do you need?</span>
      <ComboBox {options} bind:value={focus} />
      <p class="mt-4 text-body-sm text-muted-foreground">Selected: {focus || "Nothing yet"}</p>
    </aside>
  </section>
  <section id="contact" class="mx-auto grid max-w-6xl gap-4 border-t px-6 py-16 md:grid-cols-3">
    {#each cards as card (card)}
      <article class="rounded-xl border bg-card p-6">
        <h2 class="font-medium">{card}</h2>
        <p class="mt-2 text-body-sm text-muted-foreground">A composition layer built from the same documented foundations.</p>
      </article>
    {/each}
  </section>
</main>
`;let n=s?`import { ComboBox, DataTable, toast } from "${r}";`:`import { ComboBox, DataTable } from "${r}";`;return`<script lang="ts">
  ${n}
  import type { DataTableColumn } from "${r}";

  type Project = { id: string; name: string; status: string; owner: string };

  const rows: Project[] = [
    { id: "1", name: "Northstar", status: "Ready", owner: "Alex" },
    { id: "2", name: "Harbor", status: "Review", owner: "Mina" },
    { id: "3", name: "Field notes", status: "Draft", owner: "Sam" },
  ];
  const columns: DataTableColumn<Project>[] = [
    { key: "name", header: "Project", sortable: true },
    { key: "status", header: "Status" },
    { key: "owner", header: "Owner" },
  ];
  const filters = [
    { value: "all", label: "All projects" },
    { value: "ready", label: "Ready" },
    { value: "draft", label: "Draft" },
  ];
  const stats: Array<[string, string]> = [["Active signal", "84.6%"], ["Weekly reach", "18,240"], ["Open workflows", "06"]];
  let filter = $state("");
</script>

<main class="min-h-screen bg-background text-foreground">
  <header class="flex items-center justify-between border-b px-6 py-4">
    <strong>${e$(t)}</strong>
    <button type="button" class="rounded-md bg-primary px-4 py-2 text-body-sm font-medium text-primary-foreground" ${s?'onclick={() => toast.success("Project created")}':""}>New project</button>
  </header>
  <div class="mx-auto grid max-w-7xl gap-8 px-6 py-10">
    <div class="flex flex-col justify-between gap-5 md:flex-row md:items-end">
      <div>
        <p class="text-body-sm text-muted-foreground">${eA(e)}</p>
        <h1 class="mt-2 font-heading text-h1 tracking-tight">Keep the next move visible.</h1>
      </div>
      <div class="w-full md:w-72"><ComboBox options={filters} bind:value={filter} /></div>
    </div>
    <section class="grid gap-4 md:grid-cols-3">
      {#each stats as [label, value] (label)}
        <article class="rounded-xl border bg-card p-5 shadow-[var(--shadow-sm)]">
          <p class="text-body-sm text-muted-foreground">{label}</p>
          <strong class="mt-3 block text-h2">{value}</strong>
        </article>
      {/each}
    </section>
    <DataTable {columns} {rows} selectable pageSize={5} />
  </div>
</main>
`}(e),"src/lib/utils.ts":eO}},angular:e=>{let{name:t,slug:a,themeClass:o,hasToast:s}=e,r=function(e){let{name:t,state:a,framework:o,hasToast:s}=e,r=o.layout.patternsImport;if("landing"===a.projectType)return{component:`import { ChangeDetectionStrategy, Component, signal } from "@angular/core";
import { ComboBox, type ComboBoxOption } from "${r}";

@Component({
  selector: "forge-home-view",
  templateUrl: "./home-view.html",
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ComboBox],
})
export class HomeView {
  protected readonly options: ComboBoxOption[] = [
    { value: "strategy", label: "Product strategy" },
    { value: "design", label: "Interface design" },
    { value: "engineering", label: "Frontend engineering" },
  ];
  protected readonly cards = ["Clear hierarchy", "Reusable sections", "Accessible states"];
  protected readonly focus = signal("");
}
`,template:`<main class="min-h-screen bg-background text-foreground">
  <header class="mx-auto flex max-w-6xl items-center justify-between border-b px-6 py-5">
    <strong>${e$(t)}</strong>
    <a class="rounded-md bg-primary px-4 py-2 text-body-sm font-medium text-primary-foreground" href="#contact">Start a project</a>
  </header>
  <section class="mx-auto grid min-h-[68vh] max-w-6xl items-center gap-12 px-6 py-20 md:grid-cols-[1.25fr_.75fr]">
    <div>
      <p class="mb-5 text-body-sm font-medium text-muted-foreground">A focused system for useful work</p>
      <h1 class="max-w-3xl font-heading text-h1 tracking-tight md:text-display">Make the product feel intentional from the first screen.</h1>
      <p class="mt-7 max-w-2xl text-body-lg text-muted-foreground">This example composition already uses the generated semantic tokens, spacing, radius, and component patterns.</p>
    </div>
    <aside class="rounded-xl border bg-card p-6 shadow-[var(--shadow-md)]">
      <span class="mb-3 block text-body-sm font-medium">What do you need?</span>
      <forge-combo-box [options]="options" [(value)]="focus" />
      <p class="mt-4 text-body-sm text-muted-foreground">Selected: {{ focus() || "Nothing yet" }}</p>
    </aside>
  </section>
  <section id="contact" class="mx-auto grid max-w-6xl gap-4 border-t px-6 py-16 md:grid-cols-3">
    @for (card of cards; track card) {
      <article class="rounded-xl border bg-card p-6">
        <h2 class="font-medium">{{ card }}</h2>
        <p class="mt-2 text-body-sm text-muted-foreground">A composition layer built from the same documented foundations.</p>
      </article>
    }
  </section>
</main>
`};let n=s?`import { toast } from "ngx-sonner";
`:"",i=s?`

  protected createProject() {
    toast.success("Project created");
  }`:"";return{component:`import { ChangeDetectionStrategy, Component, signal } from "@angular/core";
${n}import { ComboBox, DataTable, type ComboBoxOption, type DataTableColumn } from "${r}";

type Project = { id: string; name: string; status: string; owner: string };

@Component({
  selector: "forge-home-view",
  templateUrl: "./home-view.html",
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ComboBox, DataTable],
})
export class HomeView {
  protected readonly rows: Project[] = [
    { id: "1", name: "Northstar", status: "Ready", owner: "Alex" },
    { id: "2", name: "Harbor", status: "Review", owner: "Mina" },
    { id: "3", name: "Field notes", status: "Draft", owner: "Sam" },
  ];
  protected readonly columns: DataTableColumn<Project>[] = [
    { key: "name", header: "Project", sortable: true },
    { key: "status", header: "Status" },
    { key: "owner", header: "Owner" },
  ];
  protected readonly filters: ComboBoxOption[] = [
    { value: "all", label: "All projects" },
    { value: "ready", label: "Ready" },
    { value: "draft", label: "Draft" },
  ];
  protected readonly stats: Array<[string, string]> = [["Active signal", "84.6%"], ["Weekly reach", "18,240"], ["Open workflows", "06"]];
  protected readonly filter = signal("");${i}
}
`,template:`<main class="min-h-screen bg-background text-foreground">
  <header class="flex items-center justify-between border-b px-6 py-4">
    <strong>${e$(t)}</strong>
    <button type="button" class="rounded-md bg-primary px-4 py-2 text-body-sm font-medium text-primary-foreground" ${s?'(click)="createProject()"':""}>New project</button>
  </header>
  <div class="mx-auto grid max-w-7xl gap-8 px-6 py-10">
    <div class="flex flex-col justify-between gap-5 md:flex-row md:items-end">
      <div>
        <p class="text-body-sm text-muted-foreground">${eA(e)}</p>
        <h1 class="mt-2 font-heading text-h1 tracking-tight">Keep the next move visible.</h1>
      </div>
      <div class="w-full md:w-72"><forge-combo-box [options]="filters" [(value)]="filter" /></div>
    </div>
    <section class="grid gap-4 md:grid-cols-3">
      @for (stat of stats; track stat[0]) {
        <article class="rounded-xl border bg-card p-5 shadow-[var(--shadow-sm)]">
          <p class="text-body-sm text-muted-foreground">{{ stat[0] }}</p>
          <strong class="mt-3 block text-h2">{{ stat[1] }}</strong>
        </article>
      }
    </section>
    <forge-data-table [columns]="columns" [rows]="rows" [selectable]="true" [pageSize]="5" />
  </div>
</main>
`}}(e),n=e.framework.layout.patternsImport,i=s?`import { HomeView } from "./home-view";
import { ToastProvider } from "${n}";`:'import { HomeView } from "./home-view";';return{"package.json":ej({slug:a,scripts:{ng:"ng",start:"ng serve",build:"ng build",watch:"ng build --watch --configuration development",typecheck:"tsc --noEmit -p tsconfig.app.json"},dependencies:eN(["@angular/cdk","@angular/common","@angular/compiler","@angular/core","@angular/forms","@angular/platform-browser","@angular/router","@spartan-ng/brain","clsx","rxjs","tailwind-merge","tslib",...e.packages]),devDependencies:eN(["@angular/build","@angular/cli","@angular/compiler-cli","@spartan-ng/cli","@tailwindcss/postcss","tailwindcss","tw-animate-css","typescript"],{typescript:"~6.0.3"})}),"angular.json":eC({$schema:"./node_modules/@angular/cli/lib/config/schema.json",version:1,newProjectRoot:"projects",projects:{[a]:{projectType:"application",schematics:{"@schematics/angular:component":{style:"css",changeDetection:"OnPush"}},root:"",sourceRoot:"src",prefix:"forge",architect:{build:{builder:"@angular/build:application",options:{outputPath:`dist/${a}`,browser:"src/main.ts",index:"src/index.html",tsConfig:"tsconfig.app.json",assets:[{glob:"**/*",input:"public"}],styles:["src/styles.css"]},configurations:{production:{budgets:[{type:"initial",maximumWarning:"500kB",maximumError:"1MB"},{type:"anyComponentStyle",maximumWarning:"4kB",maximumError:"8kB"}],outputHashing:"all"},development:{optimization:!1,extractLicenses:!1,sourceMap:!0}},defaultConfiguration:"production"},serve:{builder:"@angular/build:dev-server",configurations:{production:{buildTarget:`${a}:build:production`},development:{buildTarget:`${a}:build:development`}},defaultConfiguration:"development"}}}}}),"tsconfig.json":eC({compileOnSave:!1,compilerOptions:{strict:!0,noImplicitOverride:!0,noPropertyAccessFromIndexSignature:!0,noImplicitReturns:!0,noFallthroughCasesInSwitch:!0,skipLibCheck:!0,isolatedModules:!0,experimentalDecorators:!0,importHelpers:!0,target:"ES2022",module:"preserve",paths:{"@/*":["./src/app/*"]}},angularCompilerOptions:{enableI18nLegacyMessageIdFormat:!1,strictInjectionParameters:!0,strictInputAccessModifiers:!0,typeCheckHostBindings:!0,strictTemplates:!0}}),"tsconfig.app.json":eC({extends:"./tsconfig.json",compilerOptions:{outDir:"./out-tsc/app",types:[]},files:["src/main.ts"],include:["src/**/*.d.ts"]}),"components.json":eC({componentsPath:e.framework.layout.uiDir,style:"nova",importAlias:"@spartan-ng/helm"}),".postcssrc.json":eC({plugins:{"@tailwindcss/postcss":{}}}),".gitignore":eM([".angular","out-tsc"]),"src/styles.css":eT(e),"src/index.html":`<!doctype html>
<html lang="en" class="${o}">
  <head>
    <meta charset="utf-8" />
    <title>${e$(t)}</title>
    <base href="/" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="description" content="Generated with Forge" />
  </head>
  <body>
    <forge-root></forge-root>
  </body>
</html>
`,"src/main.ts":`import { bootstrapApplication } from "@angular/platform-browser";
import { App } from "./app/app";
import { appConfig } from "./app/app.config";

bootstrapApplication(App, appConfig).catch((error) => console.error(error));
`,"src/app/app.config.ts":`import { provideBrowserGlobalErrorListeners, provideZonelessChangeDetection, type ApplicationConfig } from "@angular/core";

export const appConfig: ApplicationConfig = {
  providers: [provideBrowserGlobalErrorListeners(), provideZonelessChangeDetection()],
};
`,"src/app/app.ts":`import { ChangeDetectionStrategy, Component } from "@angular/core";
${i}

@Component({
  selector: "forge-root",
  templateUrl: "./app.html",
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [HomeView${s?", ToastProvider":""}],
})
export class App {}
`,"src/app/app.html":`<forge-home-view />
${s?"<forge-toast-provider />\n":""}`,"src/app/home-view.ts":r.component,"src/app/home-view.html":r.template,"src/app/lib/utils.ts":eP}},vanilla:e=>{let t,a,o,s,{slug:r,state:n}=e,i="landing"===n.projectType;return{"package.json":ej({slug:r,extra:{type:"module"},scripts:{dev:"vite",build:"vite build",preview:"vite preview",typecheck:"tsc --noEmit -p jsconfig.json"},dependencies:eN(["clsx","tailwind-merge",...e.packages]),devDependencies:eN(["@tailwindcss/vite","@types/node","tailwindcss","tw-animate-css","typescript","vite"])}),"jsconfig.json":eC({compilerOptions:{target:"ES2022",lib:["ES2022","DOM","DOM.Iterable"],module:"ESNext",moduleResolution:"bundler",allowJs:!0,checkJs:!0,strict:!0,noEmit:!0,skipLibCheck:!0,resolveJsonModule:!0},include:["src/**/*.js","*.js"]}),"vite.config.js":`import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";

export default defineConfig({ plugins: [tailwindcss()] });
`,"index.html":i?function(e){let{name:t,themeClass:a}=e;return`<!doctype html>
<html lang="en" class="${a}">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>${e$(t)}</title>
    <meta name="description" content="Generated with Forge" />
    <link rel="stylesheet" href="/src/styles.css" />
  </head>
  <body class="min-h-screen bg-background text-foreground">
    <header class="mx-auto flex max-w-6xl items-center justify-between border-b px-6 py-5">
      <strong>${e$(t)}</strong>
      <a class="rounded-md bg-primary px-4 py-2 text-body-sm font-medium text-primary-foreground" href="#contact">Start a project</a>
    </header>

    <section class="mx-auto grid min-h-[68vh] max-w-6xl items-center gap-12 px-6 py-20 md:grid-cols-[1.25fr_.75fr]">
      <div>
        <p class="mb-5 text-body-sm font-medium text-muted-foreground">A focused system for useful work</p>
        <h1 class="max-w-3xl font-heading text-h1 tracking-tight md:text-display">Make the product feel intentional from the first screen.</h1>
        <p class="mt-7 max-w-2xl text-body-lg text-muted-foreground">
          This example composition already uses the generated semantic tokens, spacing, radius, and component patterns.
        </p>
      </div>
      <aside class="rounded-xl border bg-card p-6 shadow-[var(--shadow-md)]">
        <span class="mb-3 block text-body-sm font-medium">What do you need?</span>
        <div data-mount="focus"></div>
        <p class="mt-4 text-body-sm text-muted-foreground" data-mount="focus-value">Selected: Nothing yet</p>
      </aside>
    </section>

    <section id="contact" class="mx-auto grid max-w-6xl gap-4 border-t px-6 py-16 md:grid-cols-3" data-mount="cards"></section>

    <script type="module" src="/src/main.js"></script>
  </body>
</html>
`}(e):function(e){let{name:t,themeClass:a}=e;return`<!doctype html>
<html lang="en" class="${a}">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>${e$(t)}</title>
    <meta name="description" content="Generated with Forge" />
    <link rel="stylesheet" href="/src/styles.css" />
  </head>
  <body class="min-h-screen bg-background text-foreground">
    <header class="flex items-center justify-between border-b px-6 py-4">
      <strong>${e$(t)}</strong>
      <span data-mount="new-project"></span>
    </header>

    <main class="mx-auto grid max-w-7xl gap-8 px-6 py-10">
      <div class="flex flex-col justify-between gap-5 md:flex-row md:items-end">
        <div>
          <p class="text-body-sm text-muted-foreground">${eA(e)}</p>
          <h1 class="mt-2 font-heading text-h1 tracking-tight">Keep the next move visible.</h1>
        </div>
        <div class="w-full md:w-72" data-mount="filter"></div>
      </div>

      <section class="grid gap-4 md:grid-cols-3" data-mount="stats"></section>
      <section data-mount="table"></section>
    </main>

    <script type="module" src="/src/main.js"></script>
  </body>
</html>
`}(e),".gitignore":eM(["dist-ssr","*.local"]),"src/styles.css":eT(e),"src/main.js":i?(t=e.framework.layout.patternsImport,`import { createComboBox } from "${t}";
import { card } from "./ui/primitives.js";
import { el, mount } from "./lib/utils.js";
import "./styles.css";

const options = [
  { value: "strategy", label: "Product strategy" },
  { value: "design", label: "Interface design" },
  { value: "engineering", label: "Frontend engineering" },
];

const selectedLabel = mount("focus-value");

const combo = createComboBox({
  options,
  onValueChange(value) {
    const match = options.find((option) => option.value === value);
    selectedLabel.textContent = "Selected: " + (match ? match.label : "Nothing yet");
  },
});
mount("focus").append(combo.element);

const cards = ["Clear hierarchy", "Reusable sections", "Accessible states"];
mount("cards").append(
  ...cards.map((title) =>
    card({
      class: "rounded-xl",
      children: [
        el("h2", { class: "text-h4" }, [title]),
        el("p", { class: "mt-2 text-body-sm text-muted-foreground" }, ["A composition layer built from the same documented foundations."]),
      ],
    }),
  ),
);
`):(a=e.framework.layout.patternsImport,o=e.hasToast?`import { createComboBox, createDataTable, toast } from "${a}";`:`import { createComboBox, createDataTable } from "${a}";`,s=e.hasToast?'button({ label: "New project", onClick: () => toast.success("Project created", { description: "It is ready in your workspace." }) })':'button({ label: "New project" })',`${o}
import { button, card } from "./ui/primitives.js";
import { el, mount } from "./lib/utils.js";
import "./styles.css";

/** @typedef {{ id: string; name: string; status: string; owner: string }} Project */

/** @type {Project[]} */
const rows = [
  { id: "1", name: "Northstar", status: "Ready", owner: "Alex" },
  { id: "2", name: "Harbor", status: "Review", owner: "Mina" },
  { id: "3", name: "Field notes", status: "Draft", owner: "Sam" },
];

/** @type {import("${a}").DataTableColumn<Project>[]} */
const columns = [
  { key: "name", header: "Project", sortable: true },
  { key: "status", header: "Status" },
  { key: "owner", header: "Owner" },
];

const filters = [
  { value: "all", label: "All projects" },
  { value: "ready", label: "Ready" },
  { value: "draft", label: "Draft" },
];

const stats = [
  ["Active signal", "84.6%"],
  ["Weekly reach", "18,240"],
  ["Open workflows", "06"],
];

mount("new-project").append(${s});

const filter = createComboBox({ options: filters, placeholder: "All projects" });
mount("filter").append(filter.element);

mount("stats").append(
  ...stats.map(([label, value]) =>
    card({
      class: "rounded-xl p-5",
      children: [el("p", { class: "text-body-sm text-muted-foreground" }, [label]), el("strong", { class: "mt-3 block text-h2" }, [value])],
    }),
  ),
);

const table = createDataTable({ columns, rows, selectable: true, pageSize: 5 });
mount("table").append(table.element);
`),"src/ui/primitives.js":eI,"src/lib/utils.js":eL}}};function eU(e){return e.trim().toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/(^-|-$)/g,"")||"forge-project"}function eK(e){return e.projectName.trim()||"Untitled project"}function eV(e){return e.logoFileName?`${g[e.framework].layout.publicDir}/brand/${$(e.logoFileName)}`:null}function eW(e){let t=g[e.framework],a=b(e.framework),o=es[e.projectType],s=et(e.projectType),r=W(e);return{schemaVersion:3,forgeVersion:"0.3.0",project:{name:eK(e),slug:eU(e.projectName),type:e.projectType},stack:{framework:t.stackLabel,frameworkKey:t.key,family:t.family,language:t.language,ui:`${a.name} with ${a.primitives}`,styling:"Tailwind CSS v4 with semantic CSS variables",routing:t.routing,packageManager:e.packageManager},layout:{styles:t.layout.styles,patterns:t.layout.patternsDir,primitives:t.layout.uiDir,utils:t.layout.utils,entry:t.layout.entry},designSystem:{colors:{primary:e.primary,secondary:e.secondary,accent:e.accent},semanticForegrounds:{primary:r.light.primaryForeground,secondary:r.light.secondaryForeground,accent:r.light.accentForeground},typography:u[e.typeVoice],radius:e.radius,density:e.density,themeMode:e.themeMode,shadowStyle:e.shadowStyle,motionStyle:e.motionStyle,logo:eV(e)?{fileName:$(e.logoFileName??"brand-mark"),outputPath:eV(e)}:null},architecture:{layers:["foundations","ui primitives","reusable patterns","project compositions"],recipe:o.name,referenceKits:o.sources,composition:o.composition,recommendedComponents:o.components,recommendedPackages:ew(t.family,o.packages),includedPatterns:eo(s),patternDependencies:s.includes("data-table")?{DataTable:["SuspenseContainer"],SuspenseContainer:["EmptyState","ErrorState"]}:{}}}}function eq(e){let t=eW(e),a=g[e.framework],o=b(e.framework),s=es[e.projectType],r=et(e.projectType),n=[...s.guardrails,...a.guardrails];return`You are continuing a frontend project called ${t.project.name}.

Read AGENTS.md, docs/DESIGN_SYSTEM.md, docs/COMPONENTS.md, and forge.config.json before changing UI. Treat those files as constraints, not suggestions.

When you are designing a new page or reworking a surface rather than making a small change, load the design skill at ${ef} and follow its phases.

PROJECT
- Type: ${p[e.projectType]}
- Slug: ${t.project.slug}
- Density: ${e.density}
- Default theme: ${e.themeMode}

STACK
- ${a.stackLabel}, ${a.language}
${o.cliPackage?`- ${o.name} components composed from local source, built on ${o.primitives}`:`- UI primitives are hand-written in ${a.layout.uiDir} and styled from the token contract; there is no component library to install`}
- Tailwind CSS v4 with semantic CSS variables
- Routing: ${a.routing}
- Package manager: ${e.packageManager}

PROJECT LAYOUT
- Token contract: ${a.layout.styles}
- Forge patterns: ${a.layout.patternsDir}
- ${o.name} primitives: ${a.layout.uiDir}
- First composition to read: ${a.layout.entry}

DESIGN SYSTEM
- Primary: ${e.primary} with ${t.designSystem.semanticForegrounds.primary} foreground
- Secondary: ${e.secondary} with ${t.designSystem.semanticForegrounds.secondary} foreground
- Accent: ${e.accent} with ${t.designSystem.semanticForegrounds.accent} foreground
- Type voice: ${u[e.typeVoice]}
- Corner language: ${e.radius}
- Shadows: ${e.shadowStyle}; motion: ${e.motionStyle}
- Logo: ${eV(e)?`use ${eV(e)}`:"no logo asset supplied yet"}

REFERENCE ARCHITECTURE
- Recipe: ${s.name}
- Composition: ${s.composition}
- Included Forge patterns: ${eo(r).join(", ")||"none"}
- Dependency chain: ${r.includes("data-table")?"DataTable → SuspenseContainer → EmptyState + ErrorState":"ComboBox has no additional Forge pattern dependencies"}

IMPLEMENTATION RULES
1. Use semantic variables such as background, foreground, primary, border, ring, success, warning, and info. Do not use brand hex values directly in components.
2. Compose the local ${o.name} primitives; do not replace the token system with component-level arbitrary colors.
3. Keep foundations, primitives, patterns, feature components, and route compositions separate.
4. Do not add gradients, invented testimonials, fake metrics, or unrelated dependencies.
5. Every data surface must account for loading, empty, error, success, and disabled states where relevant.
6. Preserve keyboard operation, visible focus, reduced motion, responsive layout, and minimum AA text contrast.
7. Update docs/COMPONENTS.md when adding a reusable public component.
${n.map((e,t)=>`${t+8}. ${e}`).join("\n")}

FIRST TASK
Run the project, inspect the example composition and component gallery, then build the first meaningful ${p[e.projectType]} feature without changing the token contract. Explain any necessary system change before editing it.`}function eJ(e){var t,a,o,s,r;let n,i;return t=e.framework,a=e.packageManager,o=er(e.projectType,et(e.projectType)),s=eU(e.projectName),n=g[t],i=function(e,t,a,o="app"){var s;let r=b(e);if(!r.cliPackage)return null;if("angular"===g[e].family){let e="npm"===t?"npx ng":"yarn"===t?"yarn run ng":"pnpm exec ng";return`${e} g @spartan-ng/cli:init --project ${o} --theme neutral --prefix theme-spartan
for component in ${a.join(" ")}; do ${e} g @spartan-ng/cli:ui "$component"; done`}return`${s=r.cliPackage,"npm"===t?`npx ${s}`:"yarn"===t?`yarn run ${s}`:`pnpm exec ${s}`} add ${a.join(" ")} -y`}(t,a,o,s),["yarn"===a?"yarn":`${a} install`,i,(r=n.devScript,"npm"===a?`npm run ${r}`:`${a} ${r}`)].filter(Boolean).join("\n")}let e_="bash setup.sh";function eY(e){let t,a,o=W(e),s=[["background",o.dark.background],["foreground",o.dark.foreground],["card",o.dark.card],["card-foreground",o.dark.cardForeground],["popover",o.dark.popover],["popover-foreground",o.dark.popoverForeground],["primary",o.dark.primary],["primary-foreground",o.dark.primaryForeground],["secondary",o.dark.secondary],["secondary-foreground",o.dark.secondaryForeground],["accent",o.dark.accent],["accent-foreground",o.dark.accentForeground],["muted",o.dark.muted],["muted-foreground",o.dark.mutedForeground],["destructive",o.dark.destructive],["destructive-foreground",o.dark.destructiveForeground],["border",o.dark.border],["input",o.dark.input],["ring",o.dark.ring],["status-success",o.dark.success],["status-warning",o.dark.warning],["status-info",o.dark.info]].map(([e,t])=>`    --${e}: ${t};`).join("\n");return`${a=(t=W(e)).typeScale.map(e=>`  --text-${e.key}: ${e.size};
  --text-${e.key}--line-height: ${e.lineHeight};
  --text-${e.key}--font-weight: ${e.weight};`).join("\n"),`@theme inline {
  --font-sans: ${t.typography.sans};
  --font-heading: ${t.typography.heading};
  --font-mono: ${t.typography.mono};
${a}
  --color-background: var(--background);
  --color-foreground: var(--foreground);
  --color-card: var(--card);
  --color-card-foreground: var(--card-foreground);
  --color-popover: var(--popover);
  --color-popover-foreground: var(--popover-foreground);
  --color-primary: var(--primary);
  --color-primary-foreground: var(--primary-foreground);
  --color-secondary: var(--secondary);
  --color-secondary-foreground: var(--secondary-foreground);
  --color-muted: var(--muted);
  --color-muted-foreground: var(--muted-foreground);
  --color-accent: var(--accent);
  --color-accent-foreground: var(--accent-foreground);
  --color-destructive: var(--destructive);
  --color-border: var(--border);
  --color-input: var(--input);
  --color-ring: var(--ring);
  --color-success: var(--status-success);
  --color-warning: var(--status-warning);
  --color-info: var(--status-info);
  --radius-sm: calc(var(--radius) * 0.6);
  --radius-md: calc(var(--radius) * 0.8);
  --radius-lg: min(var(--radius), 1.25rem);
  --radius-xl: min(calc(var(--radius) * 1.4), 1.75rem);
}

:root {
  color-scheme: light;
  --brand-primary: ${t.brand.primary};
  --brand-secondary: ${t.brand.secondary};
  --brand-accent: ${t.brand.accent};
  --radius: ${t.shape.radius};
  --space-unit: ${t.spacing.space};
  --control-height: ${t.spacing.control};
  --section-gap: ${t.spacing.section};
  --shadow-sm: ${t.shape.sm};
  --shadow-md: ${t.shape.md};
  --shadow-lg: ${t.shape.lg};
  --motion-fast: ${t.motion.fast};
  --motion-normal: ${t.motion.normal};
  --motion-easing: ${t.motion.easing};
${q(t.light)}
}

.dark {
  color-scheme: dark;
${q(t.dark)}
}

@media (prefers-reduced-motion: reduce) {
  :root { --motion-fast: 0ms; --motion-normal: 0ms; }
}
`}
@media (prefers-color-scheme: dark) {
  .system {
${s}
  }
}
`}let eZ=`MIT License

Copyright (c) 2026 Forge contributors

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED.
`,eQ={prompt:"Continue prompt",design:"Design system",config:"Config",commands:"Setup"},eX={os:3,attrs:0x1ed0000};function e1({open:e,state:t,onClose:a,onCopy:r,onDownload:n}){let i,l=(0,s.useRef)(null),[c,d]=(0,s.useState)("prompt"),p=t.projectName.trim()||"Untitled project",u=ey(t),h="prompt"===c?eq(t):"design"===c?u:"config"===c?JSON.stringify(eW(t),null,2):(i=eJ(t).split("\n").map(e=>`#   ${e}`).join("\n"),`# From the unzipped project, one command does everything:
${e_}

# setup.sh runs:
${i}
`);return(0,s.useEffect)(()=>{let t=l.current;t&&(e&&!t.open&&t.showModal(),!e&&t.open&&t.close())},[e]),(0,o.jsx)("dialog",{className:"output-dialog",ref:l,onClose:a,"aria-labelledby":"dialog-title",children:(0,o.jsxs)("div",{className:"dialog-shell",children:[(0,o.jsxs)("div",{className:"dialog-header",children:[(0,o.jsxs)("div",{children:[(0,o.jsxs)("p",{className:"section-label",children:[(0,o.jsx)("span",{className:"section-number",children:"PACK"})," Your starter context"]}),(0,o.jsxs)("h2",{id:"dialog-title",children:[p," is ready to hand off."]})]}),(0,o.jsx)("button",{className:"icon-button dialog-close",type:"button",onClick:a,"aria-label":"Close output",children:"\xd7"})]}),(0,o.jsx)("div",{className:"dialog-tabs",role:"tablist","aria-label":"Generated output",children:["prompt","design","config","commands"].map(e=>(0,o.jsx)("button",{className:`dialog-tab ${c===e?"is-active":""}`,role:"tab","aria-selected":c===e,onClick:()=>d(e),type:"button",children:eQ[e]},e))}),(0,o.jsx)("div",{className:"code-panel",children:(0,o.jsx)("pre",{children:h})}),(0,o.jsxs)("div",{className:"dialog-footer",children:[(0,o.jsxs)("span",{className:"dialog-status",children:[(0,o.jsx)("span",{className:"status-dot"})," The design system ships inside the ZIP too"]}),(0,o.jsxs)("div",{className:"dialog-actions",children:[(0,o.jsx)("button",{className:"secondary-button",type:"button",onClick:()=>r(h),children:"Copy output"}),(0,o.jsx)("button",{className:"secondary-button",type:"button",onClick:()=>n(new Blob([u],{type:"text/markdown"}),`${eU(p)}-design-system.md`),children:"Download .md"}),(0,o.jsxs)("button",{className:"primary-button",type:"button",onClick:()=>n(function(e){let t=Object.fromEntries(Object.entries(function(e){var t,a,o,s;let r,n,i,l,c,d,p,u,h,y,f,v,x=g[e.framework],w=es[e.projectType],S=et(e.projectType),k=S.includes("toast-provider"),N=k?eS[x.family]:null,C=ew(x.family,[...w.packages,...N?[N]:[]]),j={state:e,framework:x,name:eK(e),slug:eU(e.projectName),themeCss:eY(e),patternKeys:S,hasToast:k,packages:C,themeClass:"system"===e.themeMode?"system":"dark"===e.themeMode?"dark":"",logoPath:eV(e)};return{...(function(e){let t=eG[e];if(!t)throw Error(`No scaffold registered for ${e}`);return t})(e.framework)(j),...function(e,t){var a,o,s,r,n;let i,l,c=g[e],{family:d,layout:p}=c,u=ea(t),h={utils:p.utilsImport,ui:p.uiImport},y=null;if("vue"===d){let e;a=i=function(e){let{utils:t,ui:a}=e;return{"empty-state":{fileName:"EmptyState.vue",content:String.raw`<script setup lang="ts">
import type { HTMLAttributes } from "vue";
import { cn } from "${t}";

const props = withDefaults(defineProps<{ title: string; description?: string; size?: "sm" | "md" | "lg"; class?: HTMLAttributes["class"] }>(), { size: "md" });
</script>

<template>
  <div role="status" :class="cn('mx-auto flex flex-col items-center justify-center text-center', props.size === 'sm' ? 'gap-4 py-8' : props.size === 'lg' ? 'gap-6 py-16' : 'gap-6 py-12', props.class)">
    <div v-if="$slots.icon" :class="cn('flex items-center justify-center rounded-full bg-muted text-primary', props.size === 'sm' ? 'size-14' : 'size-20')" aria-hidden="true"><slot name="icon" /></div>
    <div class="space-y-2">
      <p :class="cn('font-semibold', props.size === 'sm' ? 'text-h4' : 'text-h2')">{{ props.title }}</p>
      <p v-if="props.description" class="mx-auto max-w-md text-body-lg text-muted-foreground">{{ props.description }}</p>
    </div>
    <div v-if="$slots.action"><slot name="action" /></div>
  </div>
</template>
`},"error-state":{fileName:"ErrorState.vue",content:String.raw`<script setup lang="ts">
import type { HTMLAttributes } from "vue";
import { cn } from "${t}";

const props = withDefaults(defineProps<{ title?: string; description?: string; reset?: () => void; compact?: boolean; class?: HTMLAttributes["class"] }>(), {
  title: "Something went wrong",
  description: "Try again or come back in a moment.",
  compact: false,
});
</script>

<template>
  <div role="alert" :class="cn('mx-auto flex flex-col items-center justify-center text-center', props.compact ? 'gap-3 py-8' : 'gap-4 py-12', props.class)">
    <svg :class="cn('text-destructive', props.compact ? 'size-12' : 'size-20')" aria-hidden="true" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /><path d="M12 8v4" /><path d="M12 16h.01" /></svg>
    <div class="space-y-2">
      <p :class="cn('font-semibold', props.compact ? 'text-h4' : 'text-h2')">{{ props.title }}</p>
      <p class="mx-auto max-w-sm text-body text-muted-foreground">{{ props.description }}</p>
    </div>
    <button
      v-if="props.reset"
      type="button"
      class="min-h-[var(--control-height)] rounded-md border px-4 text-body-sm font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
      @click="props.reset()"
    >
      Try again
    </button>
  </div>
</template>
`},"suspense-container":{fileName:"SuspenseContainer.vue",content:String.raw`<script lang="ts">
export type AsyncState = "idle" | "loading" | "success" | "empty" | "error";
</script>

<script setup lang="ts">
import type { HTMLAttributes } from "vue";
import { cn } from "${t}";
import EmptyState from "./EmptyState.vue";
import ErrorState from "./ErrorState.vue";

const props = withDefaults(defineProps<{ state?: AsyncState; reset?: () => void; class?: HTMLAttributes["class"] }>(), { state: "success" });
</script>

<template>
  <div :class="cn(props.class)">
    <template v-if="props.state === 'loading'">
      <slot name="fallback">
        <div class="min-h-32 animate-pulse rounded-lg border bg-muted/40 motion-reduce:animate-none" role="status" aria-label="Loading" />
      </slot>
    </template>
    <template v-else-if="props.state === 'error'">
      <slot name="error"><ErrorState :reset="props.reset" /></slot>
    </template>
    <template v-else-if="props.state === 'empty'">
      <slot name="empty"><EmptyState title="Nothing here yet" description="There are no records to show." /></slot>
    </template>
    <slot v-else />
  </div>
</template>
`},"combo-box":{fileName:"ComboBox.vue",content:String.raw`<script lang="ts">
export type ComboBoxOption = { value: string; label: string; disabled?: boolean };
</script>

<script setup lang="ts">
import { computed, ref, type HTMLAttributes } from "vue";
import { Check, ChevronsUpDown, LoaderCircle } from "@lucide/vue";
import { Button } from "${a}/button";
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "${a}/command";
import { Popover, PopoverContent, PopoverTrigger } from "${a}/popover";
import { cn } from "${t}";

const props = withDefaults(defineProps<{
  options: ComboBoxOption[];
  placeholder?: string;
  searchPlaceholder?: string;
  emptyMessage?: string;
  disabled?: boolean;
  loading?: boolean;
  clearable?: boolean;
  class?: HTMLAttributes["class"];
}>(), {
  placeholder: "Select an option",
  searchPlaceholder: "Search…",
  emptyMessage: "No results",
  disabled: false,
  loading: false,
  clearable: false,
});

const value = defineModel<string>({ default: "" });
const open = ref(false);
const selected = computed(() => props.options.find((option) => option.value === value.value));

function choose(next: string) {
  value.value = next;
  open.value = false;
}
</script>

<template>
  <Popover v-model:open="open">
    <PopoverTrigger as-child>
      <Button
        variant="outline"
        role="combobox"
        :aria-expanded="open"
        :aria-busy="props.loading"
        :disabled="props.disabled || props.loading"
        :class="cn('min-h-[var(--control-height)] w-full justify-between', props.class)"
      >
        <span v-if="props.loading" class="flex items-center gap-2">
          <LoaderCircle class="size-4 animate-spin motion-reduce:animate-none" />Loading
        </span>
        <span v-else>{{ selected?.label ?? props.placeholder }}</span>
        <ChevronsUpDown class="ml-2 size-4 opacity-50" />
      </Button>
    </PopoverTrigger>
    <PopoverContent align="start" class="w-(--reka-popper-anchor-width) p-0">
      <Command>
        <CommandInput :placeholder="props.searchPlaceholder" />
        <CommandList>
          <CommandEmpty>{{ props.emptyMessage }}</CommandEmpty>
          <CommandGroup>
            <CommandItem v-if="props.clearable && value" value="__clear" @select="choose('')">Clear selection</CommandItem>
            <CommandItem
              v-for="option in props.options"
              :key="option.value"
              :value="option.value"
              :disabled="option.disabled"
              @select="choose(option.value)"
            >
              <Check :class="cn('mr-2 size-4', value === option.value ? 'opacity-100' : 'opacity-0')" />
              {{ option.label }}
            </CommandItem>
          </CommandGroup>
        </CommandList>
      </Command>
    </PopoverContent>
  </Popover>
</template>
`},"data-table":{fileName:"DataTable.vue",content:String.raw`<script lang="ts">
export type DataTableColumn<T> = { key: string; header: string; cell?: (row: T) => string; sortable?: boolean; sortValue?: (row: T) => string | number };
</script>

<script setup lang="ts" generic="T extends Record<string, unknown>">
import { computed, ref, type HTMLAttributes } from "vue";
import { cn } from "${t}";
import SuspenseContainer, { type AsyncState } from "./SuspenseContainer.vue";

const props = withDefaults(defineProps<{
  columns: DataTableColumn<T>[];
  rows: T[];
  rowKey?: (row: T, index: number) => string;
  state?: AsyncState;
  selectable?: boolean;
  pageSize?: number;
  onRetry?: () => void;
  onSelectionChange?: (keys: string[]) => void;
  onPageChange?: (page: number) => void;
  class?: HTMLAttributes["class"];
}>(), { selectable: false, pageSize: 10 });

const page = ref(1);
const selection = ref<string[]>([]);
const sort = ref<{ key: string; direction: "asc" | "desc" } | null>(null);

const keyOf = (row: T, index: number) => (props.rowKey ? props.rowKey(row, index) : String(row.id ?? index));
const resolvedState = computed<AsyncState>(() => props.state ?? (props.rows.length ? "success" : "empty"));

const sortedRows = computed(() => {
  const active = sort.value;
  if (!active) return props.rows;
  const column = props.columns.find((item) => item.key === active.key);
  if (!column) return props.rows;
  return [...props.rows].sort((a, b) => {
    const left = column.sortValue?.(a) ?? a[column.key] ?? "";
    const right = column.sortValue?.(b) ?? b[column.key] ?? "";
    return String(left).localeCompare(String(right), undefined, { numeric: true }) * (active.direction === "asc" ? 1 : -1);
  });
});

const skeletonRows = computed(() => Math.min(props.pageSize, 5));
const totalPages = computed(() => Math.max(1, Math.ceil(sortedRows.value.length / props.pageSize)));
const visibleRows = computed(() => sortedRows.value.slice((page.value - 1) * props.pageSize, page.value * props.pageSize));

function changePage(next: number) {
  page.value = Math.min(Math.max(next, 1), totalPages.value);
  props.onPageChange?.(page.value);
}

function toggleSort(key: string) {
  sort.value = { key, direction: sort.value?.key === key && sort.value.direction === "asc" ? "desc" : "asc" };
}

function toggleRow(key: string) {
  selection.value = selection.value.includes(key) ? selection.value.filter((item) => item !== key) : [...selection.value, key];
  props.onSelectionChange?.(selection.value);
}

function cellValue(column: DataTableColumn<T>, row: T) {
  return column.cell ? column.cell(row) : String(row[column.key] ?? "—");
}
</script>

<template>
  <SuspenseContainer :class="props.class" :state="resolvedState" :reset="props.onRetry">
    <template #empty><slot name="empty" /></template>
    <!-- The loading state mirrors the table it is standing in for, not a generic block. -->
    <template #fallback>
      <div role="status" aria-label="Loading" class="overflow-hidden rounded-[min(var(--radius-lg),0.75rem)] border">
        <div class="flex items-center gap-4 border-b bg-muted/40 px-4 py-3">
          <span v-if="props.selectable" class="size-4 shrink-0 animate-pulse rounded-sm bg-muted motion-reduce:animate-none" />
          <span v-for="column in props.columns" :key="column.key" class="h-3 flex-1 animate-pulse rounded-sm bg-muted motion-reduce:animate-none" />
        </div>
        <div v-for="row in skeletonRows" :key="row" class="flex items-center gap-4 border-b px-4 py-3 last:border-b-0">
          <span v-if="props.selectable" class="size-4 shrink-0 animate-pulse rounded-sm bg-muted/60 motion-reduce:animate-none" />
          <span v-for="column in props.columns" :key="column.key" class="h-3 flex-1 animate-pulse rounded-sm bg-muted/60 motion-reduce:animate-none" />
        </div>
      </div>
    </template>
    <div class="overflow-hidden rounded-[min(var(--radius-lg),0.75rem)] border">
      <div class="overflow-x-auto">
        <table class="w-full text-body-sm">
          <thead class="border-b bg-muted/40 text-left">
            <tr>
              <th v-if="props.selectable" class="w-12 px-4 py-3"><span class="sr-only">Select rows</span></th>
              <th v-for="column in props.columns" :key="column.key" class="px-4 py-3 font-medium">
                <button
                  v-if="column.sortable"
                  type="button"
                  class="rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                  @click="toggleSort(column.key)"
                >
                  {{ column.header }} {{ sort?.key === column.key ? (sort.direction === "asc" ? "↑" : "↓") : "↕" }}
                </button>
                <template v-else>{{ column.header }}</template>
              </th>
            </tr>
          </thead>
          <tbody class="divide-y">
            <tr
              v-for="(row, index) in visibleRows"
              :key="keyOf(row, index)"
              :class="cn('transition-colors hover:bg-muted/30', selection.includes(keyOf(row, index)) && 'bg-muted/50')"
            >
              <td v-if="props.selectable" class="px-4 py-3">
                <input
                  type="checkbox"
                  :aria-label="'Select row ' + (index + 1)"
                  :checked="selection.includes(keyOf(row, index))"
                  @change="toggleRow(keyOf(row, index))"
                />
              </td>
              <td v-for="column in props.columns" :key="column.key" class="px-4 py-3 align-middle">{{ cellValue(column, row) }}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div v-if="totalPages > 1" class="flex items-center justify-between border-t px-4 py-3">
        <span class="text-caption text-muted-foreground">Page {{ page }} of {{ totalPages }}</span>
        <div class="flex gap-2">
          <button type="button" class="rounded-md border px-3 py-1.5 disabled:opacity-50" :disabled="page <= 1" @click="changePage(page - 1)">Previous</button>
          <button type="button" class="rounded-md border px-3 py-1.5 disabled:opacity-50" :disabled="page >= totalPages" @click="changePage(page + 1)">Next</button>
        </div>
      </div>
    </div>
  </SuspenseContainer>
</template>
`},"toast-provider":{fileName:"ToastProvider.vue",content:String.raw`<script setup lang="ts">
import { Toaster } from "${a}/sonner";

/*
 * The toast is a surface, so it takes the capped surface radius. Sonner reads
 * --border-radius, which the kit pins to the uncapped --radius; at a pill-sized
 * radius that turns the card into a blob.
 */
const surface = {
  "--normal-bg": "var(--popover)",
  "--normal-text": "var(--popover-foreground)",
  "--normal-border": "var(--border)",
  "--border-radius": "var(--radius-lg)",
};
</script>

<template>
  <Toaster position="top-right" rich-colors close-button :style="surface" v-bind="$attrs" />
</template>
`}}}(h),e=u.map(e=>{let t=a[e].fileName.replace(/\.vue$/,"");return"suspense-container"===e?`export { default as SuspenseContainer, type AsyncState } from "./${t}.vue";`:"combo-box"===e?`export { default as ComboBox, type ComboBoxOption } from "./${t}.vue";`:"data-table"===e?`export { default as DataTable, type DataTableColumn } from "./${t}.vue";`:`export { default as ${t} } from "./${t}.vue";`}),u.includes("toast-provider")&&e.push('export { toast } from "vue-sonner";'),l=`${e.join("\n")}
`}else if("svelte"===d){let e,t;o=i=function(e){let{utils:t,ui:a}=e;return{"empty-state":{fileName:"empty-state.svelte",content:String.raw`<script lang="ts">
  import type { Snippet } from "svelte";
  import { cn } from "${t}";

  let {
    title,
    description,
    icon,
    action,
    size = "md",
    class: className,
  }: { title: string; description?: string; icon?: Snippet; action?: Snippet; size?: "sm" | "md" | "lg"; class?: string } = $props();
</script>

<div
  role="status"
  class={cn(
    "mx-auto flex flex-col items-center justify-center text-center",
    size === "sm" ? "gap-4 py-8" : size === "lg" ? "gap-6 py-16" : "gap-6 py-12",
    className,
  )}
>
  {#if icon}<div class={cn("flex items-center justify-center rounded-full bg-muted text-primary", size === "sm" ? "size-14" : "size-20")} aria-hidden="true">{@render icon()}</div>{/if}
  <div class="space-y-2">
    <p class={cn("font-semibold", size === "sm" ? "text-h4" : "text-h2")}>{title}</p>
    {#if description}<p class="mx-auto max-w-md text-body-lg text-muted-foreground">{description}</p>{/if}
  </div>
  {#if action}<div>{@render action()}</div>{/if}
</div>
`},"error-state":{fileName:"error-state.svelte",content:String.raw`<script lang="ts">
  import { cn } from "${t}";

  let {
    title = "Something went wrong",
    description = "Try again or come back in a moment.",
    reset,
    compact = false,
    class: className,
  }: { title?: string; description?: string; reset?: () => void; compact?: boolean; class?: string } = $props();
</script>

<div role="alert" class={cn("mx-auto flex flex-col items-center justify-center text-center", compact ? "gap-3 py-8" : "gap-4 py-12", className)}>
  <svg class={cn("text-destructive", compact ? "size-12" : "size-20")} aria-hidden="true" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /><path d="M12 8v4" /><path d="M12 16h.01" /></svg>
  <div class="space-y-2">
    <p class={cn("font-semibold", compact ? "text-h4" : "text-h2")}>{title}</p>
    <p class="mx-auto max-w-sm text-body text-muted-foreground">{description}</p>
  </div>
  {#if reset}
    <button
      type="button"
      class="min-h-[var(--control-height)] rounded-md border px-4 text-body-sm font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
      onclick={reset}
    >
      Try again
    </button>
  {/if}
</div>
`},"suspense-container":{fileName:"suspense-container.svelte",content:String.raw`<script lang="ts">
  import type { Snippet } from "svelte";
  import { cn } from "${t}";
  import EmptyState from "./empty-state.svelte";
  import ErrorState from "./error-state.svelte";
  import type { AsyncState } from "./types.js";

  let {
    children,
    // Renamed locally: a binding named state would shadow the $state rune.
    state: asyncState = "success",
    fallback,
    empty,
    error,
    reset,
    class: className,
  }: {
    children?: Snippet;
    state?: AsyncState;
    fallback?: Snippet;
    empty?: Snippet;
    error?: Snippet;
    reset?: () => void;
    class?: string;
  } = $props();
</script>

<div class={cn(className)}>
  {#if asyncState === "loading"}
    {#if fallback}{@render fallback()}{:else}
      <div class="min-h-32 animate-pulse rounded-lg border bg-muted/40 motion-reduce:animate-none" role="status" aria-label="Loading"></div>
    {/if}
  {:else if asyncState === "error"}
    {#if error}{@render error()}{:else}<ErrorState {reset} />{/if}
  {:else if asyncState === "empty"}
    {#if empty}{@render empty()}{:else}<EmptyState title="Nothing here yet" description="There are no records to show." />{/if}
  {:else if children}
    {@render children()}
  {/if}
</div>
`},"combo-box":{fileName:"combo-box.svelte",content:String.raw`<script lang="ts">
  import Check from "@lucide/svelte/icons/check";
  import ChevronsUpDown from "@lucide/svelte/icons/chevrons-up-down";
  import LoaderCircle from "@lucide/svelte/icons/loader-circle";
  import { tick } from "svelte";
  import { Button } from "${a}/button/index.js";
  import * as Command from "${a}/command/index.js";
  import * as Popover from "${a}/popover/index.js";
  import { cn } from "${t}";
  import type { ComboBoxOption } from "./types.js";

  let {
    options,
    value = $bindable(""),
    onValueChange,
    placeholder = "Select an option",
    searchPlaceholder = "Search…",
    emptyMessage = "No results",
    disabled = false,
    loading = false,
    clearable = false,
    class: className,
  }: {
    options: ComboBoxOption[];
    value?: string;
    onValueChange?: (value: string) => void;
    placeholder?: string;
    searchPlaceholder?: string;
    emptyMessage?: string;
    disabled?: boolean;
    loading?: boolean;
    clearable?: boolean;
    class?: string;
  } = $props();

  let open = $state(false);
  let triggerRef = $state<HTMLButtonElement | null>(null);
  const selected = $derived(options.find((option) => option.value === value));

  function choose(next: string) {
    value = next;
    onValueChange?.(next);
    open = false;
    tick().then(() => triggerRef?.focus());
  }
</script>

<Popover.Root bind:open>
  <Popover.Trigger bind:ref={triggerRef}>
    {#snippet child({ props })}
      <Button
        {...props}
        variant="outline"
        role="combobox"
        aria-expanded={open}
        aria-busy={loading}
        disabled={disabled || loading}
        class={cn("min-h-[var(--control-height)] w-full justify-between", className)}
      >
        {#if loading}
          <span class="flex items-center gap-2"><LoaderCircle class="size-4 animate-spin motion-reduce:animate-none" />Loading</span>
        {:else}
          {selected?.label ?? placeholder}
        {/if}
        <ChevronsUpDown class="ml-2 size-4 opacity-50" />
      </Button>
    {/snippet}
  </Popover.Trigger>
  <Popover.Content align="start" class="w-[var(--bits-popover-anchor-width)] p-0">
    <Command.Root>
      <Command.Input placeholder={searchPlaceholder} />
      <Command.List>
        <Command.Empty>{emptyMessage}</Command.Empty>
        <Command.Group>
          {#if clearable && value}
            <Command.Item value="__clear" onSelect={() => choose("")}>Clear selection</Command.Item>
          {/if}
          {#each options as option (option.value)}
            <Command.Item value={option.value} disabled={option.disabled} onSelect={() => choose(option.value)}>
              <Check class={cn("mr-2 size-4", value === option.value ? "opacity-100" : "opacity-0")} />
              {option.label}
            </Command.Item>
          {/each}
        </Command.Group>
      </Command.List>
    </Command.Root>
  </Popover.Content>
</Popover.Root>
`},"data-table":{fileName:"data-table.svelte",content:String.raw`<script lang="ts" generics="T extends Record<string, unknown>">
  import type { Snippet } from "svelte";
  import { cn } from "${t}";
  import SuspenseContainer from "./suspense-container.svelte";
  import type { AsyncState, DataTableColumn } from "./types.js";

  let {
    columns,
    rows,
    rowKey,
    // Renamed locally: a binding named state would shadow the $state rune.
    state: asyncState,
    onRetry,
    empty,
    selectable = false,
    onSelectionChange,
    pageSize = 10,
    onPageChange,
    class: className,
  }: {
    columns: DataTableColumn<T>[];
    rows: T[];
    rowKey?: (row: T, index: number) => string;
    state?: AsyncState;
    onRetry?: () => void;
    empty?: Snippet;
    selectable?: boolean;
    onSelectionChange?: (keys: string[]) => void;
    pageSize?: number;
    onPageChange?: (page: number) => void;
    class?: string;
  } = $props();

  let page = $state(1);
  let selection = $state<string[]>([]);
  let sort = $state<{ key: string; direction: "asc" | "desc" } | null>(null);

  const keyOf = (row: T, index: number) => (rowKey ? rowKey(row, index) : String(row.id ?? index));
  const resolvedState = $derived<AsyncState>(asyncState ?? (rows.length ? "success" : "empty"));

  const sortedRows = $derived.by(() => {
    if (!sort) return rows;
    const column = columns.find((item) => item.key === sort?.key);
    if (!column) return rows;
    const direction = sort.direction === "asc" ? 1 : -1;
    return [...rows].sort((a, b) => {
      const left = column.sortValue?.(a) ?? a[column.key] ?? "";
      const right = column.sortValue?.(b) ?? b[column.key] ?? "";
      return String(left).localeCompare(String(right), undefined, { numeric: true }) * direction;
    });
  });

  const totalPages = $derived(Math.max(1, Math.ceil(sortedRows.length / pageSize)));
  const skeletonRows = $derived(Math.min(pageSize, 5));
  const visibleRows = $derived(sortedRows.slice((page - 1) * pageSize, page * pageSize));

  function changePage(next: number) {
    page = Math.min(Math.max(next, 1), totalPages);
    onPageChange?.(page);
  }

  function toggleSort(key: string) {
    sort = { key, direction: sort?.key === key && sort.direction === "asc" ? "desc" : "asc" };
  }

  function toggleRow(key: string) {
    selection = selection.includes(key) ? selection.filter((item) => item !== key) : [...selection, key];
    onSelectionChange?.(selection);
  }

  function cellValue(column: DataTableColumn<T>, row: T) {
    return column.cell ? column.cell(row) : String(row[column.key] ?? "—");
  }
</script>

{#snippet tableSkeleton()}
  <!-- The loading state mirrors the table it is standing in for, not a generic block. -->
  <div role="status" aria-label="Loading" class="overflow-hidden rounded-[min(var(--radius-lg),0.75rem)] border">
    <div class="flex items-center gap-4 border-b bg-muted/40 px-4 py-3">
      {#if selectable}<span class="size-4 shrink-0 animate-pulse rounded-sm bg-muted motion-reduce:animate-none"></span>{/if}
      {#each columns as column (column.key)}<span class="h-3 flex-1 animate-pulse rounded-sm bg-muted motion-reduce:animate-none"></span>{/each}
    </div>
    {#each Array(skeletonRows) as _, row (row)}
      <div class="flex items-center gap-4 border-b px-4 py-3 last:border-b-0">
        {#if selectable}<span class="size-4 shrink-0 animate-pulse rounded-sm bg-muted/60 motion-reduce:animate-none"></span>{/if}
        {#each columns as column (column.key)}<span class="h-3 flex-1 animate-pulse rounded-sm bg-muted/60 motion-reduce:animate-none"></span>{/each}
      </div>
    {/each}
  </div>
{/snippet}

<SuspenseContainer class={className} state={resolvedState} reset={onRetry} {empty} fallback={tableSkeleton}>
  <div class="overflow-hidden rounded-[min(var(--radius-lg),0.75rem)] border">
    <div class="overflow-x-auto">
      <table class="w-full text-body-sm">
        <thead class="border-b bg-muted/40 text-left">
          <tr>
            {#if selectable}<th class="w-12 px-4 py-3"><span class="sr-only">Select rows</span></th>{/if}
            {#each columns as column (column.key)}
              <th class="px-4 py-3 font-medium">
                {#if column.sortable}
                  <button type="button" class="rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring" onclick={() => toggleSort(column.key)}>
                    {column.header}
                    {sort?.key === column.key ? (sort.direction === "asc" ? "↑" : "↓") : "↕"}
                  </button>
                {:else}
                  {column.header}
                {/if}
              </th>
            {/each}
          </tr>
        </thead>
        <tbody class="divide-y">
          {#each visibleRows as row, index (keyOf(row, index))}
            <tr class={cn("transition-colors hover:bg-muted/30", selection.includes(keyOf(row, index)) && "bg-muted/50")}>
              {#if selectable}
                <td class="px-4 py-3">
                  <input
                    type="checkbox"
                    aria-label={"Select row " + (index + 1)}
                    checked={selection.includes(keyOf(row, index))}
                    onchange={() => toggleRow(keyOf(row, index))}
                  />
                </td>
              {/if}
              {#each columns as column (column.key)}
                <td class="px-4 py-3 align-middle">{cellValue(column, row)}</td>
              {/each}
            </tr>
          {/each}
        </tbody>
      </table>
    </div>
    {#if totalPages > 1}
      <div class="flex items-center justify-between border-t px-4 py-3">
        <span class="text-caption text-muted-foreground">Page {page} of {totalPages}</span>
        <div class="flex gap-2">
          <button type="button" class="rounded-md border px-3 py-1.5 disabled:opacity-50" disabled={page <= 1} onclick={() => changePage(page - 1)}>Previous</button>
          <button type="button" class="rounded-md border px-3 py-1.5 disabled:opacity-50" disabled={page >= totalPages} onclick={() => changePage(page + 1)}>Next</button>
        </div>
      </div>
    {/if}
  </div>
</SuspenseContainer>
`},"toast-provider":{fileName:"toast-provider.svelte",content:String.raw`<script lang="ts">
  import type { ComponentProps } from "svelte";
  import { Toaster } from "${a}/sonner/index.js";

  let props: ComponentProps<typeof Toaster> = $props();

  /*
   * The toast is a surface, so it takes the capped surface radius. Sonner reads
   * --border-radius, which the kit pins to the uncapped --radius; at a pill-sized
   * radius that turns the card into a blob.
   */
  const surface =
    "--normal-bg: var(--popover); --normal-text: var(--popover-foreground); --normal-border: var(--border); --border-radius: var(--radius-lg);";
</script>

<Toaster position="top-right" richColors closeButton style={surface} {...props} />
`}}}(h),e={"combo-box":"ComboBox","data-table":"DataTable","empty-state":"EmptyState","error-state":"ErrorState","suspense-container":"SuspenseContainer","toast-provider":"ToastProvider"},(t=u.map(t=>`export { default as ${e[t]} } from "./${o[t].fileName}";`)).push('export type { AsyncState, ComboBoxOption, DataTableColumn } from "./types.js";'),u.includes("toast-provider")&&t.push('export { toast } from "svelte-sonner";'),l=`${t.join("\n")}
`,y=Y}else if("angular"===d){let e;s=i=function(e){let{utils:t}=e;return{"empty-state":{fileName:"empty-state.ts",content:String.raw`import { ChangeDetectionStrategy, Component, computed, input } from "@angular/core";
import { cn } from "${t}";

@Component({
  selector: "forge-empty-state",
  templateUrl: "./empty-state.html",
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { role: "status", "[class]": "hostClass()" },
})
export class EmptyState {
  readonly title = input.required<string>();
  readonly description = input<string>();
  readonly size = input<"sm" | "md" | "lg">("md");
  protected readonly hostClass = computed(() =>
    cn(
      "mx-auto flex flex-col items-center justify-center text-center",
      this.size() === "sm" ? "gap-4 py-8" : this.size() === "lg" ? "gap-6 py-16" : "gap-6 py-12",
    ),
  );
  protected readonly iconClass = computed(() =>
    cn("flex items-center justify-center rounded-full bg-muted text-primary empty:hidden", this.size() === "sm" ? "size-14" : "size-20"),
  );
  protected readonly titleClass = computed(() => cn("font-semibold", this.size() === "sm" ? "text-h4" : "text-h2"));
}
`,siblings:{"empty-state.html":String.raw`<div [class]="iconClass()" aria-hidden="true"><ng-content select="[icon]" /></div>
<div class="space-y-2">
  <p [class]="titleClass()">{{ title() }}</p>
  @if (description()) {
    <p class="mx-auto max-w-md text-body-lg text-muted-foreground">{{ description() }}</p>
  }
</div>
<div class="empty:hidden"><ng-content select="[action]" /></div>
`}},"error-state":{fileName:"error-state.ts",content:String.raw`import { booleanAttribute, ChangeDetectionStrategy, Component, computed, input, output } from "@angular/core";
import { cn } from "${t}";

@Component({
  selector: "forge-error-state",
  templateUrl: "./error-state.html",
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { role: "alert", "[class]": "hostClass()" },
})
export class ErrorState {
  readonly title = input("Something went wrong");
  readonly description = input("Try again or come back in a moment.");
  readonly compact = input(false, { transform: booleanAttribute });
  /** Angular signals recovery with an input plus an output instead of a reset callback prop. */
  readonly recoverable = input(false, { transform: booleanAttribute });
  readonly retry = output<void>();
  protected readonly hostClass = computed(() => cn("mx-auto flex flex-col items-center justify-center text-center", this.compact() ? "gap-3 py-8" : "gap-4 py-12"));
  protected readonly iconClass = computed(() => cn("text-destructive", this.compact() ? "size-12" : "size-20"));
  protected readonly titleClass = computed(() => cn("font-semibold", this.compact() ? "text-h4" : "text-h2"));
}
`,siblings:{"error-state.html":String.raw`<svg [class]="iconClass()" aria-hidden="true" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /><path d="M12 8v4" /><path d="M12 16h.01" /></svg>
<div class="space-y-2">
  <p [class]="titleClass()">{{ title() }}</p>
  <p class="mx-auto max-w-sm text-body text-muted-foreground">{{ description() }}</p>
</div>
@if (recoverable()) {
  <button
    type="button"
    class="min-h-[var(--control-height)] rounded-md border px-4 text-body-sm font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
    (click)="retry.emit()"
  >
    Try again
  </button>
}
`}},"suspense-container":{fileName:"suspense-container.ts",content:String.raw`import { NgTemplateOutlet } from "@angular/common";
import { ChangeDetectionStrategy, Component, input, output, type TemplateRef } from "@angular/core";
import { EmptyState } from "./empty-state";
import { ErrorState } from "./error-state";
import type { AsyncState } from "./types";

@Component({
  selector: "forge-suspense-container",
  templateUrl: "./suspense-container.html",
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [EmptyState, ErrorState, NgTemplateOutlet],
  host: { class: "block" },
})
export class SuspenseContainer {
  readonly state = input<AsyncState>("success");
  /** A surface-shaped loading state; DataTable passes its own table skeleton. */
  readonly fallback = input<TemplateRef<unknown> | null>(null);
  readonly emptyTitle = input("Nothing here yet");
  readonly emptyDescription = input("There are no records to show.");
  readonly retry = output<void>();
}
`,siblings:{"suspense-container.html":String.raw`@switch (state()) {
  @case ("loading") {
    @if (fallback()) {
      <ng-container [ngTemplateOutlet]="fallback()!" />
    } @else {
      <div class="min-h-32 animate-pulse rounded-[min(var(--radius-lg),0.75rem)] border bg-muted/40 motion-reduce:animate-none" role="status" aria-label="Loading"></div>
    }
  }
  @case ("error") {
    <forge-error-state [recoverable]="true" (retry)="retry.emit()" />
  }
  @case ("empty") {
    <forge-empty-state [title]="emptyTitle()" [description]="emptyDescription()" />
  }
}
<div [class]="state() === 'success' ? 'contents' : 'hidden'"><ng-content /></div>
`}},"combo-box":{fileName:"combo-box.ts",content:String.raw`import { booleanAttribute, ChangeDetectionStrategy, Component, computed, ElementRef, inject, input, model, signal } from "@angular/core";
import { cn } from "${t}";
import type { ComboBoxOption } from "./types";

let comboBoxId = 0;

@Component({
  selector: "forge-combo-box",
  templateUrl: "./combo-box.html",
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { class: "relative block", "(document:pointerdown)": "onDocumentPointerDown($event)" },
})
export class ComboBox {
  private readonly host = inject(ElementRef<HTMLElement>);

  readonly options = input.required<ComboBoxOption[]>();
  readonly value = model("");
  readonly placeholder = input("Select an option");
  readonly searchPlaceholder = input("Search…");
  readonly emptyMessage = input("No results");
  readonly disabled = input(false, { transform: booleanAttribute });
  readonly loading = input(false, { transform: booleanAttribute });
  readonly clearable = input(false, { transform: booleanAttribute });

  protected readonly listId = "forge-combo-box-" + comboBoxId++;
  protected readonly open = signal(false);
  protected readonly query = signal("");
  protected readonly activeIndex = signal(0);
  protected readonly selected = computed(() => this.options().find((option) => option.value === this.value()));
  protected readonly visibleOptions = computed(() => {
    const query = this.query().trim().toLowerCase();
    return query ? this.options().filter((option) => option.label.toLowerCase().includes(query)) : this.options();
  });
  protected readonly triggerClass = computed(() =>
    cn(
      "flex min-h-[var(--control-height)] w-full items-center justify-between gap-2 rounded-md border bg-background px-3 text-body-sm",
      "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50",
    ),
  );

  protected optionClass(option: ComboBoxOption, index: number) {
    return cn(
      "flex w-full cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-left text-body-sm",
      index === this.activeIndex() && "bg-accent text-accent-foreground",
      option.disabled && "pointer-events-none opacity-50",
    );
  }

  protected toggle() {
    if (this.disabled() || this.loading()) return;
    this.open.update((open) => !open);
    this.query.set("");
    this.activeIndex.set(Math.max(0, this.visibleOptions().findIndex((option) => option.value === this.value())));
  }

  protected choose(option: ComboBoxOption) {
    if (option.disabled) return;
    this.value.set(option.value);
    this.close();
  }

  protected clear() {
    this.value.set("");
    this.close();
  }

  protected close() {
    this.open.set(false);
    this.query.set("");
  }

  protected onQuery(event: Event) {
    this.query.set((event.target as HTMLInputElement).value);
    this.activeIndex.set(0);
  }

  protected onKeydown(event: KeyboardEvent) {
    const options = this.visibleOptions();
    if (event.key === "Escape") return this.close();
    if (event.key === "ArrowDown" || event.key === "ArrowUp") {
      event.preventDefault();
      if (!this.open()) return this.toggle();
      const step = event.key === "ArrowDown" ? 1 : -1;
      this.activeIndex.update((index) => (options.length ? (index + step + options.length) % options.length : 0));
      return;
    }
    if (event.key === "Home") return this.activeIndex.set(0);
    if (event.key === "End") return this.activeIndex.set(Math.max(0, options.length - 1));
    if (event.key === "Enter" && this.open()) {
      event.preventDefault();
      const option = options[this.activeIndex()];
      if (option) this.choose(option);
    }
  }

  protected onDocumentPointerDown(event: Event) {
    if (this.open() && !this.host.nativeElement.contains(event.target as Node)) this.close();
  }
}
`,siblings:{"combo-box.html":String.raw`<button
  type="button"
  role="combobox"
  aria-haspopup="listbox"
  [attr.aria-expanded]="open()"
  [attr.aria-controls]="listId"
  [attr.aria-busy]="loading()"
  [disabled]="disabled() || loading()"
  [class]="triggerClass()"
  (click)="toggle()"
  (keydown)="onKeydown($event)"
>
  @if (loading()) {
    <span class="flex items-center gap-2">
      <span class="size-4 animate-spin rounded-full border-2 border-current border-t-transparent motion-reduce:animate-none" aria-hidden="true"></span>Loading
    </span>
  } @else {
    <span class="truncate">{{ selected()?.label ?? placeholder() }}</span>
  }
  <span class="opacity-50" aria-hidden="true">⌄</span>
</button>

@if (open()) {
  <div class="absolute z-50 mt-1 w-full rounded-md border bg-popover p-1 text-popover-foreground shadow-[var(--shadow-md)]">
    <input
      type="text"
      class="mb-1 w-full rounded-sm bg-transparent px-2 py-1.5 text-body-sm focus-visible:outline-none"
      [placeholder]="searchPlaceholder()"
      [value]="query()"
      (input)="onQuery($event)"
      (keydown)="onKeydown($event)"
    />
    <ul role="listbox" [id]="listId" class="max-h-60 overflow-y-auto">
      @if (clearable() && value()) {
        <li><button type="button" class="w-full rounded-sm px-2 py-1.5 text-left text-body-sm" (click)="clear()">Clear selection</button></li>
      }
      @for (option of visibleOptions(); track option.value; let index = $index) {
        <li role="option" [attr.aria-selected]="option.value === value()">
          <button type="button" [class]="optionClass(option, index)" [disabled]="option.disabled" (click)="choose(option)" (mouseenter)="activeIndex.set(index)">
            <span [class]="option.value === value() ? 'opacity-100' : 'opacity-0'" aria-hidden="true">✓</span>
            {{ option.label }}
          </button>
        </li>
      } @empty {
        <li class="px-2 py-3 text-center text-body-sm text-muted-foreground">{{ emptyMessage() }}</li>
      }
    </ul>
  </div>
}
`}},"data-table":{fileName:"data-table.ts",content:String.raw`import { booleanAttribute, ChangeDetectionStrategy, Component, computed, input, output, signal } from "@angular/core";
import { cn } from "${t}";
import { SuspenseContainer } from "./suspense-container";
import type { AsyncState, DataTableColumn } from "./types";

@Component({
  selector: "forge-data-table",
  templateUrl: "./data-table.html",
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [SuspenseContainer],
  host: { class: "block" },
})
export class DataTable<T extends Record<string, unknown>> {
  readonly columns = input.required<DataTableColumn<T>[]>();
  readonly rows = input.required<T[]>();
  readonly rowKey = input<(row: T, index: number) => string>();
  readonly state = input<AsyncState>();
  readonly selectable = input(false, { transform: booleanAttribute });
  readonly pageSize = input(10);
  readonly retry = output<void>();
  readonly selectionChange = output<string[]>();
  readonly pageChange = output<number>();

  protected readonly page = signal(1);
  protected readonly selection = signal<string[]>([]);
  protected readonly sort = signal<{ key: string; direction: "asc" | "desc" } | null>(null);

  protected readonly resolvedState = computed<AsyncState>(() => this.state() ?? (this.rows().length ? "success" : "empty"));
  protected readonly sortedRows = computed(() => {
    const sort = this.sort();
    const rows = this.rows();
    if (!sort) return rows;
    const column = this.columns().find((item) => item.key === sort.key);
    if (!column) return rows;
    const direction = sort.direction === "asc" ? 1 : -1;
    return [...rows].sort((a, b) => {
      const left = column.sortValue ? column.sortValue(a) : a[column.key] ?? "";
      const right = column.sortValue ? column.sortValue(b) : b[column.key] ?? "";
      return String(left).localeCompare(String(right), undefined, { numeric: true }) * direction;
    });
  });
  protected readonly totalPages = computed(() => Math.max(1, Math.ceil(this.sortedRows().length / this.pageSize())));
  protected readonly skeletonRows = computed(() => Array.from({ length: Math.min(this.pageSize(), 5) }, (_, index) => index));
  protected readonly visibleRows = computed(() => this.sortedRows().slice((this.page() - 1) * this.pageSize(), this.page() * this.pageSize()));

  protected keyOf(row: T, index: number) {
    const rowKey = this.rowKey();
    return rowKey ? rowKey(row, index) : String(row["id"] ?? index);
  }

  protected cellValue(column: DataTableColumn<T>, row: T) {
    return column.cell ? column.cell(row) : String(row[column.key] ?? "—");
  }

  protected rowClass(key: string) {
    return cn("transition-colors hover:bg-muted/30", this.selection().includes(key) && "bg-muted/50");
  }

  protected sortIndicator(key: string) {
    const sort = this.sort();
    if (sort?.key !== key) return "↕";
    return sort.direction === "asc" ? "↑" : "↓";
  }

  protected toggleSort(key: string) {
    const sort = this.sort();
    this.sort.set({ key, direction: sort?.key === key && sort.direction === "asc" ? "desc" : "asc" });
  }

  protected toggleRow(key: string) {
    this.selection.update((keys) => (keys.includes(key) ? keys.filter((item) => item !== key) : [...keys, key]));
    this.selectionChange.emit(this.selection());
  }

  protected changePage(next: number) {
    this.page.set(Math.min(Math.max(next, 1), this.totalPages()));
    this.pageChange.emit(this.page());
  }
}
`,siblings:{"data-table.html":String.raw`<forge-suspense-container [state]="resolvedState()" [fallback]="tableSkeleton" (retry)="retry.emit()">
  <div class="overflow-hidden rounded-[min(var(--radius-lg),0.75rem)] border">
    <div class="overflow-x-auto">
      <table class="w-full text-body-sm">
        <thead class="border-b bg-muted/40 text-left">
          <tr>
            @if (selectable()) {
              <th class="w-12 px-4 py-3"><span class="sr-only">Select rows</span></th>
            }
            @for (column of columns(); track column.key) {
              <th class="px-4 py-3 font-medium">
                @if (column.sortable) {
                  <button type="button" class="rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring" (click)="toggleSort(column.key)">
                    {{ column.header }} {{ sortIndicator(column.key) }}
                  </button>
                } @else {
                  {{ column.header }}
                }
              </th>
            }
          </tr>
        </thead>
        <tbody class="divide-y">
          @for (row of visibleRows(); track keyOf(row, $index); let index = $index) {
            <tr [class]="rowClass(keyOf(row, index))">
              @if (selectable()) {
                <td class="px-4 py-3">
                  <input
                    type="checkbox"
                    [attr.aria-label]="'Select row ' + (index + 1)"
                    [checked]="selection().includes(keyOf(row, index))"
                    (change)="toggleRow(keyOf(row, index))"
                  />
                </td>
              }
              @for (column of columns(); track column.key) {
                <td class="px-4 py-3 align-middle">{{ cellValue(column, row) }}</td>
              }
            </tr>
          }
        </tbody>
      </table>
    </div>
    @if (totalPages() > 1) {
      <div class="flex items-center justify-between border-t px-4 py-3">
        <span class="text-caption text-muted-foreground">Page {{ page() }} of {{ totalPages() }}</span>
        <div class="flex gap-2">
          <button type="button" class="rounded-md border px-3 py-1.5 disabled:opacity-50" [disabled]="page() <= 1" (click)="changePage(page() - 1)">Previous</button>
          <button type="button" class="rounded-md border px-3 py-1.5 disabled:opacity-50" [disabled]="page() >= totalPages()" (click)="changePage(page() + 1)">Next</button>
        </div>
      </div>
    }
  </div>
</forge-suspense-container>

<!-- The loading state mirrors the table it is standing in for, not a generic block. -->
<ng-template #tableSkeleton>
  <div role="status" aria-label="Loading" class="overflow-hidden rounded-[min(var(--radius-lg),0.75rem)] border">
    <div class="flex items-center gap-4 border-b bg-muted/40 px-4 py-3">
      @if (selectable()) {
        <span class="size-4 shrink-0 animate-pulse rounded-sm bg-muted motion-reduce:animate-none"></span>
      }
      @for (column of columns(); track column.key) {
        <span class="h-3 flex-1 animate-pulse rounded-sm bg-muted motion-reduce:animate-none"></span>
      }
    </div>
    @for (row of skeletonRows(); track row) {
      <div class="flex items-center gap-4 border-b px-4 py-3 last:border-b-0">
        @if (selectable()) {
          <span class="size-4 shrink-0 animate-pulse rounded-sm bg-muted/60 motion-reduce:animate-none"></span>
        }
        @for (column of columns(); track column.key) {
          <span class="h-3 flex-1 animate-pulse rounded-sm bg-muted/60 motion-reduce:animate-none"></span>
        }
      </div>
    }
  </div>
</ng-template>
`}},"toast-provider":{fileName:"toast-provider.ts",content:String.raw`import { ChangeDetectionStrategy, Component } from "@angular/core";
import { NgxSonnerToaster } from "ngx-sonner";

@Component({
  selector: "forge-toast-provider",
  templateUrl: "./toast-provider.html",
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgxSonnerToaster],
})
export class ToastProvider {
  protected readonly surface: Record<string, string> = {
    "--ngx-sonner-border-radius": "var(--radius-lg)",
    "--normal-bg": "var(--popover)",
    "--normal-text": "var(--popover-foreground)",
    "--normal-border": "var(--border)",
  };
}
`,siblings:{"toast-provider.html":String.raw`<!--
  The toast is a surface, so it takes the capped surface radius. ngx-sonner
  otherwise falls back to a fixed 8px and ignores the token contract entirely.
-->
<ngx-sonner-toaster position="top-right" [richColors]="true" [closeButton]="true" [style]="surface" />
`}}}}(h),(e=u.map(e=>`export * from "./${s[e].fileName.replace(/\.ts$/,"")}";`)).push('export type { AsyncState, ComboBoxOption, DataTableColumn } from "./types";'),u.includes("toast-provider")&&e.push('export { toast } from "ngx-sonner";'),l=`${e.join("\n")}
`,y=_}else"vanilla"===d?(i=function(e){let{utils:t}=e;return{"empty-state":{fileName:"empty-state.js",content:String.raw`import { cn, el } from "${t}";

/**
 * @typedef {object} EmptyStateOptions
 * @property {string} title
 * @property {string} [description]
 * @property {Node} [icon]
 * @property {Node} [action]
 * @property {"sm" | "md" | "lg"} [size]
 * @property {string} [class]
 */

/**
 * A no-data surface.
 * @param {EmptyStateOptions} options
 * @returns {HTMLElement}
 */
export function createEmptyState({ title, description, icon, action, size = "md", class: className }) {
  return el(
    "div",
    {
      role: "status",
      class: cn(
        "mx-auto flex flex-col items-center justify-center text-center",
        size === "sm" ? "gap-4 py-8" : size === "lg" ? "gap-6 py-16" : "gap-6 py-12",
        className,
      ),
    },
    [
      icon
        ? el(
            "div",
            {
              class: cn("flex items-center justify-center rounded-full bg-muted text-primary", size === "sm" ? "size-14" : "size-20"),
              "aria-hidden": "true",
            },
            [icon],
          )
        : null,
      el("div", { class: "space-y-2" }, [
        el("p", { class: cn("font-semibold", size === "sm" ? "text-h4" : "text-h2") }, [title]),
        description ? el("p", { class: "mx-auto max-w-md text-body-lg text-muted-foreground" }, [description]) : null,
      ]),
      action ? el("div", {}, [action]) : null,
    ],
  );
}
`},"error-state":{fileName:"error-state.js",content:String.raw`import { cn, el } from "${t}";

/**
 * @typedef {object} ErrorStateOptions
 * @property {string} [title]
 * @property {string} [description]
 * @property {() => void} [reset]
 * @property {boolean} [compact]
 * @property {string} [class]
 */

/**
 * A recoverable error surface. Passing reset adds the retry control.
 * @param {ErrorStateOptions} [options]
 * @returns {HTMLElement}
 */
/**
 * The alert glyph. el() builds HTML elements, so the SVG is written as markup
 * to keep it in the correct namespace without an icon dependency.
 * @param {string} className
 * @returns {HTMLElement}
 */
function alertIcon(className) {
  const wrapper = document.createElement("span");
  wrapper.className = className;
  wrapper.setAttribute("aria-hidden", "true");
  wrapper.innerHTML =
    '<svg class="size-full" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /><path d="M12 8v4" /><path d="M12 16h.01" /></svg>';
  return wrapper;
}

export function createErrorState({ title = "Something went wrong", description = "Try again or come back in a moment.", reset, compact = false, class: className } = {}) {
  return el(
    "div",
    { role: "alert", class: cn("mx-auto flex flex-col items-center justify-center text-center", compact ? "gap-3 py-8" : "gap-4 py-12", className) },
    [
      alertIcon(cn("text-destructive", compact ? "size-12" : "size-20")),
      el("div", { class: "space-y-2" }, [
        el("p", { class: cn("font-semibold", compact ? "text-h4" : "text-h2") }, [title]),
        el("p", { class: "mx-auto max-w-sm text-body text-muted-foreground" }, [description]),
      ]),
      reset
        ? el(
            "button",
            {
              type: "button",
              class: "min-h-[var(--control-height)] rounded-md border px-4 text-body-sm font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
              onclick: reset,
            },
            ["Try again"],
          )
        : null,
    ],
  );
}
`},"suspense-container":{fileName:"suspense-container.js",content:String.raw`import { cn, el } from "${t}";
import { createEmptyState } from "./empty-state.js";
import { createErrorState } from "./error-state.js";

/** @typedef {"idle" | "loading" | "success" | "empty" | "error"} AsyncState */

/**
 * @typedef {object} SuspenseContainerOptions
 * @property {Node} [content] Rendered while the state is idle or success.
 * @property {AsyncState} [state]
 * @property {Node} [fallback]
 * @property {Node} [empty]
 * @property {Node} [error]
 * @property {() => void} [reset]
 * @property {string} [class]
 */

function defaultFallback() {
  return el("div", {
    role: "status",
    "aria-label": "Loading",
    class: "min-h-32 animate-pulse rounded-[min(var(--radius-lg),0.75rem)] border bg-muted/40 motion-reduce:animate-none",
  });
}

/**
 * Owns the loading, empty, error, and success branches for one surface.
 * @param {SuspenseContainerOptions} options
 */
export function createSuspenseContainer({ content, state = "success", fallback, empty, error, reset, class: className }) {
  const element = el("div", { class: cn(className) });
  let current = /** @type {AsyncState} */ (state);

  function currentChild() {
    if (current === "loading") return fallback ?? defaultFallback();
    if (current === "error") return error ?? createErrorState({ reset });
    if (current === "empty") return empty ?? createEmptyState({ title: "Nothing here yet", description: "There are no records to show." });
    return content ?? el("div");
  }

  function render() {
    element.replaceChildren(currentChild());
  }

  render();

  return {
    element,
    /** @param {AsyncState} next */
    setState(next) {
      current = next;
      render();
    },
    /** @param {Node} next */
    setContent(next) {
      content = next;
      render();
    },
  };
}
`},"combo-box":{fileName:"combo-box.js",content:String.raw`import { cn, el } from "${t}";

/**
 * @typedef {object} ComboBoxOption
 * @property {string} value
 * @property {string} label
 * @property {boolean} [disabled]
 */

/**
 * @typedef {object} ComboBoxOptions
 * @property {ComboBoxOption[]} options
 * @property {string} [value]
 * @property {(value: string) => void} [onValueChange]
 * @property {string} [placeholder]
 * @property {string} [searchPlaceholder]
 * @property {string} [emptyMessage]
 * @property {boolean} [disabled]
 * @property {boolean} [loading]
 * @property {boolean} [clearable]
 * @property {string} [class]
 */

let comboBoxId = 0;

/**
 * Searchable selection with keyboard navigation, loading, disabled, clearable,
 * and empty states.
 * @param {ComboBoxOptions} options
 */
export function createComboBox({
  options,
  value = "",
  onValueChange,
  placeholder = "Select an option",
  searchPlaceholder = "Search…",
  emptyMessage = "No results",
  disabled = false,
  loading = false,
  clearable = false,
  class: className,
}) {
  const listId = "forge-combo-box-" + comboBoxId++;
  let items = options;
  let selected = value;
  let open = false;
  let query = "";
  let activeIndex = 0;

  const label = el("span", { class: "truncate" });
  const trigger = el(
    "button",
    {
      type: "button",
      role: "combobox",
      "aria-haspopup": "listbox",
      "aria-controls": listId,
      class: cn(
        "flex min-h-[var(--control-height)] w-full items-center justify-between gap-2 rounded-md border bg-background px-3 text-body-sm",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50",
      ),
    },
    [label, el("span", { class: "opacity-50", "aria-hidden": "true" }, ["⌄"])],
  );

  const search = /** @type {HTMLInputElement} */ (el("input", {
    type: "text",
    class: "mb-1 w-full rounded-sm bg-transparent px-2 py-1.5 text-body-sm focus-visible:outline-none",
    placeholder: searchPlaceholder,
  }));
  const list = el("ul", { role: "listbox", id: listId, class: "max-h-60 overflow-y-auto" });
  const panel = el(
    "div",
    { class: "absolute z-50 mt-1 w-full rounded-md border bg-popover p-1 text-popover-foreground shadow-[var(--shadow-md)]" },
    [search, list],
  );
  const element = el("div", { class: cn("relative block", className) }, [trigger]);

  function visibleOptions() {
    const term = query.trim().toLowerCase();
    return term ? items.filter((option) => option.label.toLowerCase().includes(term)) : items;
  }

  function renderTrigger() {
    const match = items.find((option) => option.value === selected);
    label.textContent = loading ? "Loading" : match ? match.label : placeholder;
    trigger.toggleAttribute("disabled", disabled || loading);
    trigger.setAttribute("aria-expanded", String(open));
    trigger.setAttribute("aria-busy", String(loading));
  }

  function renderList() {
    const rendered = visibleOptions();
    list.replaceChildren();
    if (clearable && selected) {
      list.append(
        el("li", {}, [
          el("button", { type: "button", class: "w-full rounded-sm px-2 py-1.5 text-left text-body-sm", onclick: () => choose("") }, ["Clear selection"]),
        ]),
      );
    }
    if (!rendered.length) {
      list.append(el("li", { class: "px-2 py-3 text-center text-body-sm text-muted-foreground" }, [emptyMessage]));
      return;
    }
    rendered.forEach((option, index) => {
      const button = el(
        "button",
        {
          type: "button",
          class: cn(
            "flex w-full cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-left text-body-sm",
            index === activeIndex && "bg-accent text-accent-foreground",
            option.disabled && "pointer-events-none opacity-50",
          ),
          onclick: () => choose(option.value),
          onmouseenter: () => {
            activeIndex = index;
            renderList();
          },
        },
        [
          el("span", { class: option.value === selected ? "opacity-100" : "opacity-0", "aria-hidden": "true" }, ["✓"]),
          option.label,
        ],
      );
      if (option.disabled) button.setAttribute("disabled", "");
      list.append(el("li", { role: "option", "aria-selected": String(option.value === selected) }, [button]));
    });
  }

  /** @param {boolean} next */
  function setOpen(next) {
    open = next && !disabled && !loading;
    query = "";
    search.value = "";
    if (open) {
      activeIndex = Math.max(0, visibleOptions().findIndex((option) => option.value === selected));
      element.append(panel);
      renderList();
    } else if (panel.isConnected) {
      panel.remove();
    }
    renderTrigger();
  }

  /** @param {string} next */
  function choose(next) {
    selected = next;
    onValueChange?.(next);
    setOpen(false);
    trigger.focus();
  }

  /** @param {KeyboardEvent} event */
  function onKeydown(event) {
    const rendered = visibleOptions();
    if (event.key === "Escape") return setOpen(false);
    if (event.key === "ArrowDown" || event.key === "ArrowUp") {
      event.preventDefault();
      if (!open) return setOpen(true);
      const step = event.key === "ArrowDown" ? 1 : -1;
      activeIndex = rendered.length ? (activeIndex + step + rendered.length) % rendered.length : 0;
      return renderList();
    }
    if (event.key === "Enter" && open) {
      event.preventDefault();
      const option = rendered[activeIndex];
      if (option && !option.disabled) choose(option.value);
    }
  }

  /** @param {Event} event */
  function onDocumentPointerDown(event) {
    if (open && event.target instanceof Node && !element.contains(event.target)) setOpen(false);
  }

  trigger.addEventListener("click", () => setOpen(!open));
  trigger.addEventListener("keydown", onKeydown);
  search.addEventListener("keydown", onKeydown);
  search.addEventListener("input", () => {
    query = search.value;
    activeIndex = 0;
    renderList();
  });
  document.addEventListener("pointerdown", onDocumentPointerDown);

  renderTrigger();

  return {
    element,
    /** @param {string} next */
    setValue(next) {
      selected = next;
      renderTrigger();
      if (open) renderList();
    },
    /** @param {ComboBoxOption[]} next */
    setOptions(next) {
      items = next;
      renderTrigger();
      if (open) renderList();
    },
    /** @param {boolean} next */
    setLoading(next) {
      loading = next;
      if (next) setOpen(false);
      renderTrigger();
    },
    /** @param {boolean} next */
    setDisabled(next) {
      disabled = next;
      if (next) setOpen(false);
      renderTrigger();
    },
    destroy() {
      document.removeEventListener("pointerdown", onDocumentPointerDown);
      element.remove();
    },
  };
}
`},"data-table":{fileName:"data-table.js",content:String.raw`import { cn, el } from "${t}";
import { createSuspenseContainer } from "./suspense-container.js";

/**
 * @template T
 * @typedef {object} DataTableColumn
 * @property {string} key
 * @property {string} header
 * @property {(row: T) => string} [cell]
 * @property {boolean} [sortable]
 * @property {(row: T) => string | number} [sortValue]
 */

/**
 * @template {Record<string, unknown>} T
 * @typedef {object} DataTableOptions
 * @property {DataTableColumn<T>[]} columns
 * @property {T[]} rows
 * @property {(row: T, index: number) => string} [rowKey]
 * @property {import("./suspense-container.js").AsyncState} [state]
 * @property {() => void} [onRetry]
 * @property {Node} [empty]
 * @property {boolean} [selectable]
 * @property {(keys: string[]) => void} [onSelectionChange]
 * @property {number} [pageSize]
 * @property {(page: number) => void} [onPageChange]
 * @property {string} [class]
 */

/**
 * Typed sorting, selection, pagination, and async states.
 * @template {Record<string, unknown>} T
 * @param {DataTableOptions<T>} options
 */
export function createDataTable({
  columns,
  rows,
  rowKey,
  state,
  onRetry,
  empty,
  selectable = false,
  onSelectionChange,
  pageSize = 10,
  onPageChange,
  class: className,
}) {
  let data = rows;
  let page = 1;
  let selection = /** @type {string[]} */ ([]);
  let sort = /** @type {{ key: string; direction: "asc" | "desc" } | null} */ (null);

  const frame = el("div", { class: "overflow-hidden rounded-[min(var(--radius-lg),0.75rem)] border" });

  /** The loading state mirrors the table it is standing in for, not a generic block. */
  function skeleton() {
    const bar = (muted) => el("span", { class: "h-3 flex-1 animate-pulse rounded-sm motion-reduce:animate-none " + (muted ? "bg-muted/60" : "bg-muted") });
    const box = (muted) => el("span", { class: "size-4 shrink-0 animate-pulse rounded-sm motion-reduce:animate-none " + (muted ? "bg-muted/60" : "bg-muted") });
    const row = (muted, className) =>
      el("div", { class: className }, [selectable ? box(muted) : null, ...columns.map(() => bar(muted))]);
    return el(
      "div",
      { role: "status", "aria-label": "Loading", class: "overflow-hidden rounded-[min(var(--radius-lg),0.75rem)] border" },
      [
        row(false, "flex items-center gap-4 border-b bg-muted/40 px-4 py-3"),
        ...Array.from({ length: Math.min(pageSize, 5) }, () => row(true, "flex items-center gap-4 border-b px-4 py-3 last:border-b-0")),
      ],
    );
  }

  const container = createSuspenseContainer({
    content: frame,
    state: state ?? (data.length ? "success" : "empty"),
    empty,
    fallback: skeleton(),
    reset: onRetry,
    class: className,
  });

  /** @type {(row: T, index: number) => string} */
  const keyOf = (row, index) => (rowKey ? rowKey(row, index) : String(row["id"] ?? index));

  function sortedRows() {
    if (!sort) return data;
    const column = columns.find((item) => item.key === sort?.key);
    if (!column) return data;
    const direction = sort.direction === "asc" ? 1 : -1;
    return [...data].sort((a, b) => {
      const left = column.sortValue ? column.sortValue(a) : a[column.key] ?? "";
      const right = column.sortValue ? column.sortValue(b) : b[column.key] ?? "";
      return String(left).localeCompare(String(right), undefined, { numeric: true }) * direction;
    });
  }

  /** @param {string} key */
  function toggleSort(key) {
    const current = sort;
    sort = { key, direction: current?.key === key && current.direction === "asc" ? "desc" : "asc" };
    render();
  }

  /** @param {string} key */
  function toggleRow(key) {
    selection = selection.includes(key) ? selection.filter((item) => item !== key) : [...selection, key];
    onSelectionChange?.(selection);
    render();
  }

  /**
   * @param {number} next
   * @param {number} totalPages
   */
  function changePage(next, totalPages) {
    page = Math.min(Math.max(next, 1), totalPages);
    onPageChange?.(page);
    render();
  }

  function render() {
    const sorted = sortedRows();
    const totalPages = Math.max(1, Math.ceil(sorted.length / pageSize));
    const visible = sorted.slice((page - 1) * pageSize, page * pageSize);

    const head = el("tr", {}, [
      selectable ? el("th", { class: "w-12 px-4 py-3" }, [el("span", { class: "sr-only" }, ["Select rows"])]) : null,
      ...columns.map((column) =>
        el("th", { class: "px-4 py-3 font-medium" }, [
          column.sortable
            ? el(
                "button",
                { type: "button", class: "rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring", onclick: () => toggleSort(column.key) },
                [column.header + " " + (sort?.key === column.key ? (sort.direction === "asc" ? "↑" : "↓") : "↕")],
              )
            : column.header,
        ]),
      ),
    ]);

    const body = visible.map((row, index) => {
      const key = keyOf(row, index);
      const checkbox = el("input", { type: "checkbox", "aria-label": "Select row " + (index + 1), onchange: () => toggleRow(key) });
      if (selection.includes(key)) checkbox.setAttribute("checked", "");
      return el("tr", { class: cn("transition-colors hover:bg-muted/30", selection.includes(key) && "bg-muted/50") }, [
        selectable ? el("td", { class: "px-4 py-3" }, [checkbox]) : null,
        ...columns.map((column) =>
          el("td", { class: "px-4 py-3 align-middle" }, [column.cell ? column.cell(row) : String(row[column.key] ?? "—")]),
        ),
      ]);
    });

    frame.replaceChildren(
      el("div", { class: "overflow-x-auto" }, [
        el("table", { class: "w-full text-body-sm" }, [
          el("thead", { class: "border-b bg-muted/40 text-left" }, [head]),
          el("tbody", { class: "divide-y" }, body),
        ]),
      ]),
      totalPages > 1
        ? el("div", { class: "flex items-center justify-between border-t px-4 py-3" }, [
            el("span", { class: "text-caption text-muted-foreground" }, ["Page " + page + " of " + totalPages]),
            el("div", { class: "flex gap-2" }, [
              el(
                "button",
                { type: "button", class: "rounded-md border px-3 py-1.5 disabled:opacity-50", disabled: page <= 1, onclick: () => changePage(page - 1, totalPages) },
                ["Previous"],
              ),
              el(
                "button",
                { type: "button", class: "rounded-md border px-3 py-1.5 disabled:opacity-50", disabled: page >= totalPages, onclick: () => changePage(page + 1, totalPages) },
                ["Next"],
              ),
            ]),
          ])
        : el("span", { class: "hidden" }),
    );
  }

  render();

  return {
    element: container.element,
    /** @param {T[]} next */
    setRows(next) {
      data = next;
      page = 1;
      container.setState(state ?? (data.length ? "success" : "empty"));
      render();
    },
    /** @param {import("./suspense-container.js").AsyncState} next */
    setState(next) {
      container.setState(next);
    },
  };
}
`},"toast-provider":{fileName:"toast-provider.js",content:String.raw`import { cn, el } from "${t}";

/** @typedef {"success" | "info" | "warning" | "error" | "loading"} ToastTone */

const TONES = {
  success: { icon: "✓", class: "border-success/40 text-success" },
  info: { icon: "i", class: "border-info/40 text-info" },
  warning: { icon: "!", class: "border-warning/40 text-warning" },
  error: { icon: "×", class: "border-destructive/40 text-destructive" },
  loading: { icon: "◌", class: "border-border text-muted-foreground" },
};

/** @type {HTMLElement | null} */
let region = null;

/**
 * Mounts the feedback region once, near the end of the document.
 * @param {{ class?: string }} [options]
 */
export function createToastProvider({ class: className } = {}) {
  if (region) return region;
  region = el("div", {
    role: "status",
    "aria-live": "polite",
    class: cn("pointer-events-none fixed right-4 top-4 z-[100] flex w-80 flex-col gap-2", className),
  });
  document.body.append(region);
  return region;
}

/** @typedef {{ description?: string; duration?: number }} ToastOptions */

/**
 * @param {ToastTone} tone
 * @param {string} message
 * @param {ToastOptions} [options]
 * @returns {{ dismiss: () => void }}
 */
function push(tone, message, { description, duration = tone === "loading" ? 0 : 4000 } = {}) {
  const host = createToastProvider();
  const { icon, class: toneClass } = TONES[tone];
  const card = el(
    "div",
    {
      class: cn(
        "pointer-events-auto flex items-start gap-3 rounded-lg border bg-popover p-3 text-popover-foreground shadow-[var(--shadow-md)]",
        "transition-opacity duration-[var(--motion-normal)] motion-reduce:transition-none",
        toneClass,
      ),
    },
    [
      el("span", { class: cn("text-body-sm", tone === "loading" && "animate-spin motion-reduce:animate-none"), "aria-hidden": "true" }, [icon]),
      el("div", { class: "flex-1" }, [
        el("p", { class: "text-body-sm font-medium text-foreground" }, [message]),
        description ? el("p", { class: "mt-0.5 text-caption text-muted-foreground" }, [description]) : null,
      ]),
      el("button", { type: "button", class: "text-muted-foreground", "aria-label": "Dismiss", onclick: () => card.remove() }, ["×"]),
    ],
  );
  host.append(card);
  if (duration) setTimeout(() => card.remove(), duration);
  return { dismiss: () => card.remove() };
}

/**
 * Feedback surface with the same tones as the Sonner-based families.
 * @type {Record<ToastTone, (message: string, options?: ToastOptions) => { dismiss: () => void }>}
 */
export const toast = {
  success: (message, options) => push("success", message, options),
  info: (message, options) => push("info", message, options),
  warning: (message, options) => push("warning", message, options),
  error: (message, options) => push("error", message, options),
  loading: (message, options) => push("loading", message, options),
};
`}}}(h),r=i,l=`${u.map(e=>`export * from "./${r[e].fileName}";`).join("\n")}
`):(i=function(e){let{utils:t,ui:a}=e;return{"empty-state":{fileName:"empty-state.tsx",content:`import type { ReactNode } from "react";
import { cn } from "${t}";

type EmptyStateProps = {
  title: string;
  description?: string;
  action?: ReactNode;
  icon?: ReactNode;
  size?: "sm" | "md" | "lg";
  className?: string;
};

export function EmptyState({ title, description, action, icon, size = "md", className }: EmptyStateProps) {
  return (
    <div className={cn("mx-auto flex flex-col items-center justify-center text-center", size === "sm" ? "gap-4 py-8" : size === "lg" ? "gap-6 py-16" : "gap-6 py-12", className)} role="status">
      {icon ? <div className={cn("flex items-center justify-center rounded-full bg-muted text-primary", size === "sm" ? "size-14" : "size-20")} aria-hidden="true">{icon}</div> : null}
      <div className="space-y-2"><p className={cn("font-semibold", size === "sm" ? "text-h4" : "text-h2")}>{title}</p>{description ? <p className="mx-auto max-w-md text-body-lg text-muted-foreground">{description}</p> : null}</div>
      {action ? <div>{action}</div> : null}
    </div>
  );
}
`},"error-state":{fileName:"error-state.tsx",content:`"use client";

import { cn } from "${t}";

type ErrorStateProps = {
  title?: string;
  description?: string;
  reset?: () => void;
  compact?: boolean;
  className?: string;
};

export function ErrorState({ title = "Something went wrong", description = "Try again or come back in a moment.", reset, compact = false, className }: ErrorStateProps) {
  return (
    <div className={cn("mx-auto flex flex-col items-center justify-center text-center", compact ? "gap-3 py-8" : "gap-4 py-12", className)} role="alert">
      <svg className={cn("text-destructive", compact ? "size-12" : "size-20")} aria-hidden="true" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /><path d="M12 8v4" /><path d="M12 16h.01" /></svg>
      <div className="space-y-2"><p className={cn("font-semibold", compact ? "text-h4" : "text-h2")}>{title}</p><p className="mx-auto max-w-sm text-body text-muted-foreground">{description}</p></div>
      {reset ? <button className="min-h-[var(--control-height)] rounded-md border px-4 text-body-sm font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring" onClick={reset} type="button">Try again</button> : null}
    </div>
  );
}
`},"suspense-container":{fileName:"suspense-container.tsx",content:`import { Suspense, type ReactNode } from "react";
import { cn } from "${t}";
import { EmptyState } from "./empty-state";
import { ErrorState } from "./error-state";

export type AsyncState = "idle" | "loading" | "success" | "empty" | "error";
type SuspenseContainerProps = {
  children: ReactNode;
  state?: AsyncState;
  fallback?: ReactNode;
  emptyState?: ReactNode;
  errorState?: ReactNode;
  reset?: () => void;
  className?: string;
};

function DefaultFallback() {
  return <div className="min-h-32 animate-pulse rounded-[min(var(--radius-lg),0.75rem)] border bg-muted/40 motion-reduce:animate-none" aria-label="Loading" role="status" />;
}

export function SuspenseContainer({ children, state = "success", fallback = <DefaultFallback />, emptyState, errorState, reset, className }: SuspenseContainerProps) {
  if (state === "loading") return <div className={className}>{fallback}</div>;
  if (state === "error") return <div className={className}>{errorState ?? <ErrorState reset={reset} />}</div>;
  if (state === "empty") return <div className={className}>{emptyState ?? <EmptyState title="Nothing here yet" description="There are no records to show." />}</div>;
  return <Suspense fallback={fallback}><div className={cn(className)}>{children}</div></Suspense>;
}
`},"combo-box":{fileName:"combo-box.tsx",content:`"use client";

import { Check, ChevronsUpDown, LoaderCircle } from "lucide-react";
import { useState } from "react";
import { Button } from "${a}/button";
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "${a}/command";
import { Popover, PopoverContent, PopoverTrigger } from "${a}/popover";
import { cn } from "${t}";

export type ComboBoxOption = { value: string; label: string; disabled?: boolean };
type ComboBoxProps = {
  options: ComboBoxOption[];
  value?: string;
  onValueChange: (value: string) => void;
  placeholder?: string;
  searchPlaceholder?: string;
  emptyMessage?: string;
  disabled?: boolean;
  loading?: boolean;
  clearable?: boolean;
  className?: string;
};

export function ComboBox({ options, value, onValueChange, placeholder = "Select an option", searchPlaceholder = "Search…", emptyMessage = "No results", disabled = false, loading = false, clearable = false, className }: ComboBoxProps) {
  const [open, setOpen] = useState(false);
  const selected = options.find((option) => option.value === value);
  return (
    <Popover onOpenChange={setOpen} open={open && !disabled}>
      <PopoverTrigger asChild><Button aria-expanded={open} aria-busy={loading} className={cn("min-h-[var(--control-height)] w-full justify-between", className)} disabled={disabled || loading} role="combobox" variant="outline">{loading ? <span className="flex items-center gap-2"><LoaderCircle className="size-4 animate-spin motion-reduce:animate-none" />Loading</span> : selected?.label ?? placeholder}<ChevronsUpDown className="ml-2 size-4 opacity-50" /></Button></PopoverTrigger>
      <PopoverContent className="w-[--radix-popover-trigger-width] p-0" align="start"><Command><CommandInput placeholder={searchPlaceholder} /><CommandList><CommandEmpty>{emptyMessage}</CommandEmpty><CommandGroup>{clearable && value ? <CommandItem onSelect={() => { onValueChange(""); setOpen(false); }} value="__clear">Clear selection</CommandItem> : null}{options.map((option) => <CommandItem disabled={option.disabled} key={option.value} onSelect={() => { onValueChange(option.value); setOpen(false); }} value={option.value}><Check className={cn("mr-2 size-4", value === option.value ? "opacity-100" : "opacity-0")} />{option.label}</CommandItem>)}</CommandGroup></CommandList></Command></PopoverContent>
    </Popover>
  );
}
`},"data-table":{fileName:"data-table.tsx",content:`"use client";

import { useMemo, useState, type ReactNode } from "react";
import { cn } from "${t}";
import { SuspenseContainer, type AsyncState } from "./suspense-container";

export type DataTableColumn<T> = { key: string; header: ReactNode; cell?: (row: T) => ReactNode; sortable?: boolean; sortValue?: (row: T) => string | number };
type DataTableProps<T> = {
  columns: DataTableColumn<T>[];
  rows: T[];
  rowKey?: (row: T, index: number) => string;
  state?: AsyncState;
  onRetry?: () => void;
  emptyState?: ReactNode;
  selectable?: boolean;
  selectedKeys?: string[];
  onSelectionChange?: (keys: string[]) => void;
  page?: number;
  pageSize?: number;
  onPageChange?: (page: number) => void;
  className?: string;
};

/** The loading state mirrors the table it is standing in for, not a generic block. */
function TableSkeleton({ columns, rows, selectable }: { columns: number; rows: number; selectable: boolean }) {
  const cell = (muted: boolean) => cn("h-3 flex-1 animate-pulse rounded-sm motion-reduce:animate-none", muted ? "bg-muted/60" : "bg-muted");
  const box = (muted: boolean) => cn("size-4 shrink-0 animate-pulse rounded-sm motion-reduce:animate-none", muted ? "bg-muted/60" : "bg-muted");
  return (
    <div className="overflow-hidden rounded-[min(var(--radius-lg),0.75rem)] border" role="status" aria-label="Loading">
      <div className="flex items-center gap-4 border-b bg-muted/40 px-4 py-3">
        {selectable ? <span className={box(false)} /> : null}
        {Array.from({ length: columns }, (_, index) => <span className={cell(false)} key={index} />)}
      </div>
      {Array.from({ length: rows }, (_, row) => (
        <div className="flex items-center gap-4 border-b px-4 py-3 last:border-b-0" key={row}>
          {selectable ? <span className={box(true)} /> : null}
          {Array.from({ length: columns }, (_, index) => <span className={cell(true)} key={index} />)}
        </div>
      ))}
    </div>
  );
}

export function DataTable<T>({ columns, rows, rowKey = (row, index) => String((row as Record<string, unknown>).id ?? index), state, onRetry, emptyState, selectable = false, selectedKeys, onSelectionChange, page, pageSize = 10, onPageChange, className }: DataTableProps<T>) {
  const [internalPage, setInternalPage] = useState(1); const [internalSelection, setInternalSelection] = useState<string[]>([]); const [sort, setSort] = useState<{ key: string; direction: "asc" | "desc" } | null>(null);
  const activePage = page ?? internalPage; const selection = selectedKeys ?? internalSelection;
  const sortedRows = useMemo(() => { if (!sort) return rows; const column = columns.find((item) => item.key === sort.key); if (!column) return rows; return [...rows].sort((a, b) => { const left = column.sortValue?.(a) ?? (a as Record<string, unknown>)[column.key] ?? ""; const right = column.sortValue?.(b) ?? (b as Record<string, unknown>)[column.key] ?? ""; return String(left).localeCompare(String(right), undefined, { numeric: true }) * (sort.direction === "asc" ? 1 : -1); }); }, [columns, rows, sort]);
  const totalPages = Math.max(1, Math.ceil(sortedRows.length / pageSize)); const visibleRows = sortedRows.slice((activePage - 1) * pageSize, activePage * pageSize); const resolvedState = state ?? (rows.length ? "success" : "empty");
  const changePage = (next: number) => { const safe = Math.min(Math.max(next, 1), totalPages); onPageChange?.(safe); if (page === undefined) setInternalPage(safe); };
  const changeSelection = (keys: string[]) => { onSelectionChange?.(keys); if (selectedKeys === undefined) setInternalSelection(keys); };
  const toggleRow = (key: string) => changeSelection(selection.includes(key) ? selection.filter((item) => item !== key) : [...selection, key]);
  return <SuspenseContainer className={className} state={resolvedState} reset={onRetry} emptyState={emptyState} fallback={<TableSkeleton columns={columns.length} rows={Math.min(pageSize, 5)} selectable={selectable} />}><div className="overflow-hidden rounded-[min(var(--radius-lg),0.75rem)] border"><div className="overflow-x-auto"><table className="w-full text-body-sm"><thead className="border-b bg-muted/40 text-left"><tr>{selectable ? <th className="w-12 px-4 py-3"><span className="sr-only">Select rows</span></th> : null}{columns.map((column) => <th className="px-4 py-3 font-medium" key={column.key}>{column.sortable ? <button className="rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring" onClick={() => setSort((current) => ({ key: column.key, direction: current?.key === column.key && current.direction === "asc" ? "desc" : "asc" }))} type="button">{column.header} {sort?.key === column.key ? (sort.direction === "asc" ? "↑" : "↓") : "↕"}</button> : column.header}</th>)}</tr></thead><tbody className="divide-y">{visibleRows.map((row, index) => { const key = rowKey(row, index); return <tr className={cn("transition-colors hover:bg-muted/30", selection.includes(key) && "bg-muted/50")} key={key}>{selectable ? <td className="px-4 py-3"><input aria-label={"Select row " + (index + 1)} checked={selection.includes(key)} onChange={() => toggleRow(key)} type="checkbox" /></td> : null}{columns.map((column) => <td className="px-4 py-3 align-middle" key={column.key}>{column.cell ? column.cell(row) : String((row as Record<string, unknown>)[column.key] ?? "—")}</td>)}</tr>; })}</tbody></table></div>{totalPages > 1 ? <div className="flex items-center justify-between border-t px-4 py-3"><span className="text-caption text-muted-foreground">Page {activePage} of {totalPages}</span><div className="flex gap-2"><button className="rounded-md border px-3 py-1.5 disabled:opacity-50" disabled={activePage <= 1} onClick={() => changePage(activePage - 1)} type="button">Previous</button><button className="rounded-md border px-3 py-1.5 disabled:opacity-50" disabled={activePage >= totalPages} onClick={() => changePage(activePage + 1)} type="button">Next</button></div></div> : null}</div></SuspenseContainer>;
}
`},"toast-provider":{fileName:"toast-provider.tsx",content:`"use client";

import type { ComponentProps, CSSProperties } from "react";
import { Toaster } from "${a}/sonner";

export { toast } from "sonner";
/**
 * The toast is a surface, so it takes the capped surface radius. Sonner reads
 * --border-radius, which the kit pins to the uncapped --radius; at a pill-sized
 * radius that turns the card into a blob. The other three variables are the
 * kit's own defaults, restated because a style prop replaces the whole object.
 */
const TOAST_SURFACE = {
  "--normal-bg": "var(--popover)",
  "--normal-text": "var(--popover-foreground)",
  "--normal-border": "var(--border)",
  "--border-radius": "var(--radius-lg)",
} as CSSProperties;

export function ToastProvider({ style, ...props }: ComponentProps<typeof Toaster>) {
  return <Toaster closeButton position="top-right" richColors style={{ ...TOAST_SURFACE, ...style }} {...props} />;
}
`}}}(h),n=i,l=`${u.map(e=>`export * from "./${n[e].fileName.replace(/\.tsx$/,"")}";`).join("\n")}
`);let f={};for(let e of u){let t=i[e];for(let[e,a]of(f[`${p.patternsDir}/${t.fileName}`]=t.content,Object.entries(t.siblings??{})))f[`${p.patternsDir}/${e}`]=a}return y&&(f[`${p.patternsDir}/types.ts`]=y),f[`${p.patternsDir}/${"vanilla"===d?"index.js":"index.ts"}`]=l,f[`${p.patternsDir}/README.md`]=`# Forge patterns

Framework: ${c.label}. Primitives: ${m[d].name}.

Included: ${eo(u).join(", ")}.

Public APIs support a class override and the relevant async, disabled, selection, sorting, pagination, and recovery states. DataTable → SuspenseContainer → EmptyState + ErrorState.
`,f}(e.framework,S),"README.md":(r=g[(t=e).framework],n=b(t.framework),i=eV(t),`# ${eK(t)}

A bootable ${r.label} + ${n.name} starter generated by Forge.

## Start

\`\`\`sh
${e_}
\`\`\`

${n.cliPackage?`\`setup.sh\` installs dependencies, adds the local ${n.name} primitives, and starts the dev server.`:`\`setup.sh\` installs dependencies and starts the dev server. The primitives already live in \`${r.layout.uiDir}\` — there is no component CLI to run.`} Then open ${r.devUrl}.

To run the steps yourself instead:

\`\`\`sh
${eJ(t)}
\`\`\`

## System map

- \`setup.sh\` — every setup step in one command
- \`forge.config.json\` — portable, versioned decisions
- \`${r.layout.styles}\` — semantic design tokens and light/dark themes
- \`${r.layout.uiDir}\` — ${n.cliPackage?`local ${n.name} primitives created by setup`:"hand-written primitives you own"}
- \`${r.layout.patternsDir}\` — reusable product patterns
- \`${r.layout.entry}\` — the example composition
- \`docs/DESIGN_SYSTEM.md\` and \`docs/COMPONENTS.md\` — human and AI-readable rules
- \`AGENTS.md\` and \`CONTINUE_PROMPT.md\` — instructions for an AI builder
- \`${ef}\` — the website-build design skill, bound to this project's tokens
${i?`- \`${i}\` — uploaded brand mark
`:""}`),"forge.config.json":`${JSON.stringify(eW(e),null,2)}
`,"theme.css":`${J(e)}${eY(e)}
`,"setup.sh":`#!/usr/bin/env bash
# Setup for ${eK(e)}, generated by Forge.
#
# Run this file instead of typing the commands:
#
#   ${e_}
#
# or make it executable once and run it directly:
#
#   chmod +x setup.sh && ./setup.sh
#
set -euo pipefail

${eJ(e)}
`,"AGENTS.md":(l=g[(a=e).framework],c=b(a.framework),d="npm"===a.packageManager?"npm run":a.packageManager,`# AGENTS.md

This repository was generated by Forge. Read this file before changing UI.

## Stack

- ${l.stackLabel}
${c.cliPackage?`- ${c.name} (${c.docs}) on ${c.primitives}`:`- Hand-written primitives in \`${l.layout.uiDir}\`, styled from the token contract`}
- Tailwind CSS v4 with the semantic token contract in \`${l.layout.styles}\`

## Setup

Run \`${e_}\` once from the project root. It installs dependencies${c.cliPackage?`, adds the ${c.name} primitives`:""}, and starts the dev server. Every command it runs is listed in the file.

## Required workflow

1. Read \`forge.config.json\`, \`docs/DESIGN_SYSTEM.md\`, and \`docs/COMPONENTS.md\`.
2. For new pages or a redesign, work through the design skill in \`${ef}\` — discovery, narrative, motion, responsive, accessibility, and QA gates.
3. Reuse semantic tokens and existing public component APIs before adding variants.
4. Keep route composition out of reusable patterns.
5. Demonstrate loading, empty, error, success, disabled, and focus states where relevant.
6. Run \`${d} typecheck\` and \`${d} build\` before handoff.

## Non-negotiable design rules

- Never hardcode a brand hex value in a component. Use semantic variables/classes.
- Do not add gradients, decorative animation, fake data claims, or new fonts without updating the design-system documentation.
- Preserve keyboard support, visible focus, responsive behavior, reduced motion, and contrast.
- New reusable components need typed props, a class override, documented states, and an export from their index.

## Framework rules

${l.guardrails.map(e=>`- ${e}`).join("\n")}
`),"CONTINUE_PROMPT.md":`${eq(e)}
`,"docs/DESIGN_SYSTEM.md":ey(e),"docs/COMPONENTS.md":(p=g[(o=e).framework],u=b(o.framework),h=et(o.projectType).map(e=>{let t=Z.find(t=>t.key===e);return`| ${t?.label??e} | ${t?.description??"Reusable pattern"} | ${t?.states.join(", ")??"default"} |`}).join("\n"),`# Component catalog

| Component | Purpose | Required states |
| --- | --- | --- |
${h}

Public pattern components live in \`${p.layout.patternsDir}\`. ${u.name} primitives live in \`${p.layout.uiDir}\`. Add product-specific components beside them; do not turn domain components into generic primitives prematurely.

## API shape on ${p.label}

${en[p.family]}

DataTable depends on SuspenseContainer; SuspenseContainer owns EmptyState and ErrorState. ToastProvider is mounted once in the application shell.
`),[ef]:(y=g[(s=e).framework],f=s.projectName.trim()||"Untitled project",v=`
> **Phase 0.3 is already answered for this project.** Forge generated \`docs/DESIGN_SYSTEM.md\` — the
> brand guide for ${f} — with the tokens, type scale, component contracts, and rules this
> repository already ships. Read it first and enforce it. Do not establish a second token system:
> Phase 4 is a review step here, not a creation step.
>
> **Phase 15 is already answered too:** the stack is ${y.stackLabel}, and the reusable
> patterns in \`${y.layout.patternsDir}\` cover the async, empty, error, and feedback states
> the quality gates ask for. Compose those before building new primitives.
`,R.replace("---\n\n# Premium Interactive Website — Build Skill",`---
${v}
# Premium Interactive Website — Build Skill`)),LICENSE:eZ}}(e)).map(([e,t])=>[e,"setup.sh"===e?[(0,eb._u)(t),eX]:(0,eb._u)(t)])),a=eV(e);if(e.logoDataUrl&&a){let o=function(e){let t=e.split(",")[1];if(!t)return null;let a=window.atob(t),o=new Uint8Array(a.length);for(let e=0;e<a.length;e+=1)o[e]=a.charCodeAt(e);return o}(e.logoDataUrl);o&&(t[a]=o)}return new Blob([(0,eb.L)(t,{level:6})],{type:"application/zip"})}(t),`${eU(p)}-forge-starter.zip`),children:[(0,o.jsx)("span",{children:"Download ZIP"}),(0,o.jsx)("span",{className:"button-arrow",children:"↓"})]})]})]})]})})}let e0=[["project-step","01","Project","Shape the brief"],["system-step","02","System","Lock the language"],["output-step","03","Handoff","Package the context"]];function e5({activeStep:e,onStepSelect:t}){return(0,o.jsxs)("aside",{className:"sidebar","aria-label":"Forge navigation",children:[(0,o.jsxs)("div",{className:"brand-lockup",children:[(0,o.jsx)("div",{className:"brand-mark","aria-hidden":"true",children:(0,o.jsxs)("svg",{viewBox:"0 0 32 32",role:"presentation",children:[(0,o.jsx)("path",{d:"M5.7 8.5 L11.2 6 H24.7 A1.6 1.6 0 0 1 26.3 7.6 V12.9 A1.6 1.6 0 0 1 24.7 14.5 H11.2 L5.7 12 Z"}),(0,o.jsx)("rect",{x:"14.3",y:"14.5",width:"3.4",height:"11.5",rx:"1.7"})]})}),(0,o.jsxs)("div",{children:[(0,o.jsx)("p",{className:"brand-name",children:"forge"}),(0,o.jsx)("p",{className:"brand-caption",children:"frontend systems"})]})]}),(0,o.jsx)("div",{className:"sidebar-rule"}),(0,o.jsxs)("div",{className:"sidebar-intro",children:[(0,o.jsx)("p",{className:"eyebrow",children:"BUILD MODE"}),(0,o.jsx)("p",{children:"Start with the decisions your AI should not have to guess."})]}),(0,o.jsx)("nav",{className:"step-nav","aria-label":"Builder steps",children:e0.map(([a,s,r,n])=>(0,o.jsxs)("a",{className:`step-link ${e===a?"is-active":""}`,href:`#${a}`,"data-step-link":a,onClick:e=>{t&&(e.preventDefault(),t(a))},children:[(0,o.jsx)("span",{className:"step-index",children:s}),(0,o.jsxs)("span",{children:[(0,o.jsx)("strong",{children:r}),(0,o.jsx)("small",{children:n})]})]},a))})]})}var e2=a(1872);function e4({id:e,label:t,value:a,draft:r,onValueChange:n,onDraftChange:i,onDraftBlur:l}){let[c,d]=(0,s.useState)(!1),p=(0,s.useRef)(null);return(0,s.useEffect)(()=>{if(!c)return;let e=e=>{e.target instanceof Node&&!p.current?.contains(e.target)&&d(!1)},t=e=>{"Escape"===e.key&&d(!1)};return document.addEventListener("pointerdown",e),document.addEventListener("keydown",t),()=>{document.removeEventListener("pointerdown",e),document.removeEventListener("keydown",t)}},[c]),(0,o.jsxs)("div",{className:"color-field",ref:p,children:[(0,o.jsx)("label",{htmlFor:e,children:t}),(0,o.jsxs)("div",{className:"color-control",children:[(0,o.jsx)("button",{"aria-expanded":c,"aria-haspopup":"dialog","aria-label":`Choose the ${t.toLowerCase()} color`,className:"color-swatch",onClick:()=>d(e=>!e),style:{background:a},type:"button"}),(0,o.jsx)("input",{"aria-label":`${t} hex value`,className:"hex-input",id:e,maxLength:7,onBlur:l,onChange:e=>i(e.target.value),spellCheck:!1,value:r})]}),c?(0,o.jsx)("div",{"aria-label":`${t} color picker`,className:"color-popover",role:"dialog",children:(0,o.jsx)(e2.jI,{color:a,onChange:n})}):null]})}function e3({id:e,label:t,presetLabel:a,value:r,onChange:n}){let[i,l]=(0,s.useState)(!1),[c,d]=(0,s.useState)(""),[p,u]=(0,s.useState)(0),m=(0,s.useRef)(null),h=(0,s.useRef)(null),g=(0,s.useMemo)(()=>(function(e,t=60){let a=e.trim().toLowerCase();if(!a)return S.slice(0,t);let o=[],s=[];for(let e of S){let r=e.family.toLowerCase();if(r.startsWith(a)?o.push(e):r.includes(a)&&s.push(e),o.length>=t)break}return[...o,...s].slice(0,t)})(c),[c]),y=N(r);(0,s.useEffect)(()=>{if(!i)return;h.current?.focus();let e=e=>{e.target instanceof Node&&!m.current?.contains(e.target)&&l(!1)};return document.addEventListener("pointerdown",e),()=>document.removeEventListener("pointerdown",e)},[i]);let f=e=>{n(e),l(!1),d("")},b=e=>{if("Escape"===e.key)return l(!1);if("ArrowDown"===e.key||"ArrowUp"===e.key){e.preventDefault();let t="ArrowDown"===e.key?1:-1;u(e=>g.length?(e+t+g.length)%g.length:0);return}if("Enter"===e.key&&i){e.preventDefault();let t=g[p];t&&f(t.family)}};return(0,o.jsxs)("div",{className:"font-picker",ref:m,children:[(0,o.jsx)("span",{className:"font-picker-label",id:`${e}-label`,children:t}),(0,o.jsxs)("button",{"aria-expanded":i,"aria-haspopup":"listbox","aria-labelledby":`${e}-label`,className:"font-picker-trigger",id:e,onClick:()=>l(e=>!e),onKeyDown:b,type:"button",children:[(0,o.jsx)("span",{style:y?{fontFamily:`"${y.family}", sans-serif`}:void 0,children:y?y.family:`${a} (preset)`}),(0,o.jsx)("span",{"aria-hidden":"true",children:"⌄"})]}),i?(0,o.jsxs)("div",{className:"font-picker-panel",children:[(0,o.jsx)("input",{className:"font-picker-search",onChange:e=>{d(e.target.value),u(0)},onKeyDown:b,placeholder:"Search 1,800+ Google fonts",ref:h,type:"text",value:c}),(0,o.jsxs)("ul",{"aria-labelledby":`${e}-label`,className:"font-picker-list",role:"listbox",children:[(0,o.jsx)("li",{children:(0,o.jsxs)("button",{className:null===r?"is-selected":"",onClick:()=>f(null),type:"button",children:[(0,o.jsx)("span",{children:a}),(0,o.jsx)("small",{children:"type voice preset"})]})}),g.map((e,t)=>(0,o.jsx)("li",{role:"option","aria-selected":e.family===r,children:(0,o.jsxs)("button",{className:[t===p?"is-active":"",e.family===r?"is-selected":""].filter(Boolean).join(" "),onClick:()=>f(e.family),onMouseEnter:()=>u(t),type:"button",children:[(0,o.jsx)("span",{children:e.family}),(0,o.jsx)("small",{children:x[e.category]})]})},e.family)),0===g.length?(0,o.jsx)("li",{className:"font-picker-empty",children:"No family matches that name"}):null]})]}):null]})}var e6=a(2571),e9=a(5342),e7=a(4577),e8=a(82);function te({className:e,...t}){return(0,o.jsx)("div",{"data-slot":"input-group",role:"group",className:(0,n.cn)("group/input-group relative flex h-8 w-full min-w-0 items-center rounded-lg border border-input transition-colors outline-none in-data-[slot=combobox-content]:focus-within:border-inherit in-data-[slot=combobox-content]:focus-within:ring-0 has-disabled:bg-input/50 has-disabled:opacity-50 has-[[data-slot=input-group-control]:focus-visible]:border-ring has-[[data-slot=input-group-control]:focus-visible]:ring-3 has-[[data-slot=input-group-control]:focus-visible]:ring-ring/50 has-[[data-slot][aria-invalid=true]]:border-destructive has-[[data-slot][aria-invalid=true]]:ring-3 has-[[data-slot][aria-invalid=true]]:ring-destructive/20 has-[>[data-align=block-end]]:h-auto has-[>[data-align=block-end]]:flex-col has-[>[data-align=block-start]]:h-auto has-[>[data-align=block-start]]:flex-col has-[>textarea]:h-auto dark:bg-input/30 dark:has-disabled:bg-input/80 dark:has-[[data-slot][aria-invalid=true]]:ring-destructive/40 has-[>[data-align=block-end]]:[&>input]:pt-3 has-[>[data-align=block-start]]:[&>input]:pb-3 has-[>[data-align=inline-end]]:[&>input]:pr-1.5 has-[>[data-align=inline-start]]:[&>input]:pl-1.5",e),...t})}let tt=(0,r.F)("flex h-auto cursor-text items-center justify-center gap-2 py-1.5 text-sm font-medium text-muted-foreground select-none group-data-[disabled=true]/input-group:opacity-50 [&>kbd]:rounded-[calc(var(--radius)-5px)] [&>svg:not([class*='size-'])]:size-4",{variants:{align:{"inline-start":"order-first pl-2 has-[>button]:ml-[-0.3rem] has-[>kbd]:ml-[-0.15rem]","inline-end":"order-last pr-2 has-[>button]:mr-[-0.3rem] has-[>kbd]:mr-[-0.15rem]","block-start":"order-first w-full justify-start px-2.5 pt-2 group-has-[>input]/input-group:pt-2 [.border-b]:pb-2","block-end":"order-last w-full justify-start px-2.5 pb-2 group-has-[>input]/input-group:pb-2 [.border-t]:pt-2"}},defaultVariants:{align:"inline-start"}});function ta({className:e,align:t="inline-start",...a}){return(0,o.jsx)("div",{role:"group","data-slot":"input-group-addon","data-align":t,className:(0,n.cn)(tt({align:t}),e),onClick:e=>{e.target.closest("button")||e.currentTarget.parentElement?.querySelector("input")?.focus()},...a})}(0,r.F)("flex items-center gap-2 text-sm shadow-none",{variants:{size:{xs:"h-6 gap-1 rounded-[calc(var(--radius)-3px)] px-1.5 [&>svg:not([class*='size-'])]:size-3.5",sm:"","icon-xs":"size-6 rounded-[calc(var(--radius)-3px)] p-0 has-[>svg]:p-0","icon-sm":"size-8 p-0 has-[>svg]:p-0"}},defaultVariants:{size:"xs"}});var to=a(5377);function ts({className:e,...t}){return(0,o.jsx)(e8.uB,{"data-slot":"command",className:(0,n.cn)("flex size-full flex-col overflow-hidden rounded-xl! bg-popover p-1 text-popover-foreground",e),...t})}function tr({className:e,...t}){return(0,o.jsx)("div",{"data-slot":"command-input-wrapper",className:"p-1 pb-0",children:(0,o.jsxs)(te,{className:"h-8! rounded-lg! border-input/30 bg-input/30 shadow-none! *:data-[slot=input-group-addon]:pl-2!",children:[(0,o.jsx)(e8.uB.Input,{"data-slot":"command-input",className:(0,n.cn)("w-full text-sm outline-hidden disabled:cursor-not-allowed disabled:opacity-50",e),...t}),(0,o.jsx)(ta,{children:(0,o.jsx)(to.A,{className:"size-4 shrink-0 opacity-50"})})]})})}function tn({className:e,...t}){return(0,o.jsx)(e8.uB.List,{"data-slot":"command-list",className:(0,n.cn)("no-scrollbar max-h-72 scroll-py-1 overflow-x-hidden overflow-y-auto outline-none",e),...t})}function ti({className:e,...t}){return(0,o.jsx)(e8.uB.Empty,{"data-slot":"command-empty",className:(0,n.cn)("py-6 text-center text-sm",e),...t})}function tl({className:e,...t}){return(0,o.jsx)(e8.uB.Group,{"data-slot":"command-group",className:(0,n.cn)("overflow-hidden p-1 text-foreground **:[[cmdk-group-heading]]:px-2 **:[[cmdk-group-heading]]:py-1.5 **:[[cmdk-group-heading]]:text-xs **:[[cmdk-group-heading]]:font-medium **:[[cmdk-group-heading]]:text-muted-foreground",e),...t})}function tc({className:e,children:t,...a}){return(0,o.jsxs)(e8.uB.Item,{"data-slot":"command-item",className:(0,n.cn)("group/command-item relative flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden select-none in-data-[slot=dialog-content]:rounded-lg! data-[disabled=true]:pointer-events-none data-[disabled=true]:opacity-50 data-selected:bg-muted data-selected:text-foreground [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 data-selected:*:[svg]:text-foreground",e),...a,children:[t,(0,o.jsx)(e7.A,{className:"ml-auto opacity-0 group-has-data-[slot=command-shortcut]/command-item:hidden group-data-[checked=true]/command-item:opacity-100"})]})}var td=a(7993);function tp({...e}){return(0,o.jsx)(td.bL,{"data-slot":"popover",...e})}function tu({...e}){return(0,o.jsx)(td.l9,{"data-slot":"popover-trigger",...e})}function tm({className:e,align:t="center",sideOffset:a=4,...s}){return(0,o.jsx)(td.ZL,{children:(0,o.jsx)(td.UC,{"data-slot":"popover-content",align:t,sideOffset:a,className:(0,n.cn)("z-50 flex w-72 origin-(--radix-popover-content-transform-origin) flex-col gap-2.5 rounded-lg bg-popover p-2.5 text-sm text-popover-foreground shadow-md ring-1 ring-foreground/10 outline-hidden duration-100 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 data-open:animate-in data-open:fade-in-0 data-open:zoom-in-95 data-closed:animate-out data-closed:fade-out-0 data-closed:zoom-out-95",e),...s})})}function th({options:e,value:t,onValueChange:a,placeholder:r="Select an option",searchPlaceholder:i="Search…",emptyMessage:l="No results",disabled:d=!1,loading:p=!1,clearable:u=!1,className:m}){let[h,g]=(0,s.useState)(!1),y=e.find(e=>e.value===t);return(0,o.jsxs)(tp,{onOpenChange:g,open:h&&!d,children:[(0,o.jsx)(tu,{asChild:!0,children:(0,o.jsxs)(c,{"aria-expanded":h,"aria-busy":p,className:(0,n.cn)("min-h-[var(--control-height)] w-full justify-between",m),disabled:d||p,role:"combobox",variant:"outline",children:[p?(0,o.jsxs)("span",{className:"flex items-center gap-2",children:[(0,o.jsx)(e6.A,{className:"size-4 animate-spin motion-reduce:animate-none"}),"Loading"]}):y?.label??r,(0,o.jsx)(e9.A,{className:"ml-2 size-4 opacity-50"})]})}),(0,o.jsx)(tm,{className:"w-[--radix-popover-trigger-width] p-0",align:"start",children:(0,o.jsxs)(ts,{children:[(0,o.jsx)(tr,{placeholder:i}),(0,o.jsxs)(tn,{children:[(0,o.jsx)(ti,{children:l}),(0,o.jsxs)(tl,{children:[u&&t?(0,o.jsx)(tc,{onSelect:()=>{a(""),g(!1)},value:"__clear",children:"Clear selection"}):null,e.map(e=>(0,o.jsxs)(tc,{disabled:e.disabled,onSelect:()=>{a(e.value),g(!1)},value:e.value,children:[(0,o.jsx)(e7.A,{className:(0,n.cn)("mr-2 size-4",t===e.value?"opacity-100":"opacity-0")}),e.label]},e.value))]})]})]})})]})}function tg({title:e,description:t,action:a,icon:s,size:r="md",className:i}){return(0,o.jsxs)("div",{className:(0,n.cn)("mx-auto flex flex-col items-center justify-center text-center","sm"===r?"gap-4 py-8":"lg"===r?"gap-6 py-16":"gap-6 py-12",i),role:"status",children:[s?(0,o.jsx)("div",{className:(0,n.cn)("flex items-center justify-center rounded-full bg-muted text-primary","sm"===r?"size-14":"size-20"),"aria-hidden":"true",children:s}):null,(0,o.jsxs)("div",{className:"space-y-2",children:[(0,o.jsx)("p",{className:(0,n.cn)("font-semibold","sm"===r?"text-h4":"text-h2"),children:e}),t?(0,o.jsx)("p",{className:"mx-auto max-w-md text-body-lg text-muted-foreground",children:t}):null]}),a?(0,o.jsx)("div",{children:a}):null]})}function ty({title:e="Something went wrong",description:t="Try again or come back in a moment.",reset:a,compact:s=!1,className:r}){return(0,o.jsxs)("div",{className:(0,n.cn)("mx-auto flex flex-col items-center justify-center text-center",s?"gap-3 py-8":"gap-4 py-12",r),role:"alert",children:[(0,o.jsxs)("svg",{className:(0,n.cn)("text-destructive",s?"size-12":"size-20"),"aria-hidden":"true",fill:"none",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"1.5",viewBox:"0 0 24 24",children:[(0,o.jsx)("circle",{cx:"12",cy:"12",r:"10"}),(0,o.jsx)("path",{d:"M12 8v4"}),(0,o.jsx)("path",{d:"M12 16h.01"})]}),(0,o.jsxs)("div",{className:"space-y-2",children:[(0,o.jsx)("p",{className:(0,n.cn)("font-semibold",s?"text-h4":"text-h2"),children:e}),(0,o.jsx)("p",{className:"mx-auto max-w-sm text-body text-muted-foreground",children:t})]}),a?(0,o.jsx)("button",{className:"min-h-[var(--control-height)] rounded-md border px-4 text-body-sm font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",onClick:a,type:"button",children:"Try again"}):null]})}function tf(){return(0,o.jsx)("div",{className:"min-h-32 animate-pulse rounded-[min(var(--radius-lg),0.75rem)] border bg-muted/40 motion-reduce:animate-none","aria-label":"Loading",role:"status"})}function tb({children:e,state:t="success",fallback:a=(0,o.jsx)(tf,{}),emptyState:r,errorState:i,reset:l,className:c}){return"loading"===t?(0,o.jsx)("div",{className:c,children:a}):"error"===t?(0,o.jsx)("div",{className:c,children:i??(0,o.jsx)(ty,{reset:l})}):"empty"===t?(0,o.jsx)("div",{className:c,children:r??(0,o.jsx)(tg,{title:"Nothing here yet",description:"There are no records to show."})}):(0,o.jsx)(s.Suspense,{fallback:a,children:(0,o.jsx)("div",{className:(0,n.cn)(c),children:e})})}function tv({columns:e,rows:t,selectable:a}){let s=e=>(0,n.cn)("h-3 flex-1 animate-pulse rounded-sm motion-reduce:animate-none",e?"bg-muted/60":"bg-muted"),r=e=>(0,n.cn)("size-4 shrink-0 animate-pulse rounded-sm motion-reduce:animate-none",e?"bg-muted/60":"bg-muted");return(0,o.jsxs)("div",{className:"overflow-hidden rounded-[min(var(--radius-lg),0.75rem)] border",role:"status","aria-label":"Loading",children:[(0,o.jsxs)("div",{className:"flex items-center gap-4 border-b bg-muted/40 px-4 py-3",children:[a?(0,o.jsx)("span",{className:r(!1)}):null,Array.from({length:e},(e,t)=>(0,o.jsx)("span",{className:s(!1)},t))]}),Array.from({length:t},(t,n)=>(0,o.jsxs)("div",{className:"flex items-center gap-4 border-b px-4 py-3 last:border-b-0",children:[a?(0,o.jsx)("span",{className:r(!0)}):null,Array.from({length:e},(e,t)=>(0,o.jsx)("span",{className:s(!0)},t))]},n))]})}function tx({columns:e,rows:t,rowKey:a=(e,t)=>String(e.id??t),state:r,onRetry:i,emptyState:l,selectable:c=!1,selectedKeys:d,onSelectionChange:p,page:u,pageSize:m=10,onPageChange:h,className:g}){let[y,f]=(0,s.useState)(1),[b,v]=(0,s.useState)([]),[x,w]=(0,s.useState)(null),S=u??y,k=d??b,N=(0,s.useMemo)(()=>{if(!x)return t;let a=e.find(e=>e.key===x.key);return a?[...t].sort((e,t)=>{let o=a.sortValue?.(e)??e[a.key]??"",s=a.sortValue?.(t)??t[a.key]??"";return String(o).localeCompare(String(s),void 0,{numeric:!0})*("asc"===x.direction?1:-1)}):t},[e,t,x]),C=Math.max(1,Math.ceil(N.length/m)),j=N.slice((S-1)*m,S*m),T=r??(t.length?"success":"empty"),P=e=>{let t=Math.min(Math.max(e,1),C);h?.(t),void 0===u&&f(t)};return(0,o.jsx)(tb,{className:g,state:T,reset:i,emptyState:l,fallback:(0,o.jsx)(tv,{columns:e.length,rows:Math.min(m,5),selectable:c}),children:(0,o.jsxs)("div",{className:"overflow-hidden rounded-[min(var(--radius-lg),0.75rem)] border",children:[(0,o.jsx)("div",{className:"overflow-x-auto",children:(0,o.jsxs)("table",{className:"w-full text-body-sm",children:[(0,o.jsx)("thead",{className:"border-b bg-muted/40 text-left",children:(0,o.jsxs)("tr",{children:[c?(0,o.jsx)("th",{className:"w-12 px-4 py-3",children:(0,o.jsx)("span",{className:"sr-only",children:"Select rows"})}):null,e.map(e=>(0,o.jsx)("th",{className:"px-4 py-3 font-medium",children:e.sortable?(0,o.jsxs)("button",{className:"rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",onClick:()=>w(t=>({key:e.key,direction:t?.key===e.key&&"asc"===t.direction?"desc":"asc"})),type:"button",children:[e.header," ",x?.key===e.key?"asc"===x.direction?"↑":"↓":"↕"]}):e.header},e.key))]})}),(0,o.jsx)("tbody",{className:"divide-y",children:j.map((t,s)=>{let r=a(t,s);return(0,o.jsxs)("tr",{className:(0,n.cn)("transition-colors hover:bg-muted/30",k.includes(r)&&"bg-muted/50"),children:[c?(0,o.jsx)("td",{className:"px-4 py-3",children:(0,o.jsx)("input",{"aria-label":"Select row "+(s+1),checked:k.includes(r),onChange:()=>{var e;return e=k.includes(r)?k.filter(e=>e!==r):[...k,r],void(p?.(e),void 0===d&&v(e))},type:"checkbox"})}):null,e.map(e=>(0,o.jsx)("td",{className:"px-4 py-3 align-middle",children:e.cell?e.cell(t):String(t[e.key]??"—")},e.key))]},r)})})]})}),C>1?(0,o.jsxs)("div",{className:"flex items-center justify-between border-t px-4 py-3",children:[(0,o.jsxs)("span",{className:"text-caption text-muted-foreground",children:["Page ",S," of ",C]}),(0,o.jsxs)("div",{className:"flex gap-2",children:[(0,o.jsx)("button",{className:"rounded-md border px-3 py-1.5 disabled:opacity-50",disabled:S<=1,onClick:()=>P(S-1),type:"button",children:"Previous"}),(0,o.jsx)("button",{className:"rounded-md border px-3 py-1.5 disabled:opacity-50",disabled:S>=C,onClick:()=>P(S+1),type:"button",children:"Next"})]})]}):null]})})}var tw=a(460),tS=a(6609),tk=a(4962),tN=a(9339),tC=a(1012),tj=a(2367);let tT=({...e})=>{let{theme:t="system"}=(0,tw.D)();return(0,o.jsx)(tS.l$,{theme:t,className:"toaster group",icons:{success:(0,o.jsx)(tk.A,{className:"size-4"}),info:(0,o.jsx)(tN.A,{className:"size-4"}),warning:(0,o.jsx)(tC.A,{className:"size-4"}),error:(0,o.jsx)(tj.A,{className:"size-4"}),loading:(0,o.jsx)(e6.A,{className:"size-4 animate-spin"})},style:{"--normal-bg":"var(--popover)","--normal-text":"var(--popover-foreground)","--normal-border":"var(--border)","--border-radius":"var(--radius)"},toastOptions:{classNames:{toast:"cn-toast"}},...e})},tP={"--normal-bg":"var(--popover)","--normal-text":"var(--popover-foreground)","--normal-border":"var(--border)","--border-radius":"var(--radius-lg)"};function tM({style:e,...t}){return(0,o.jsx)(tT,{closeButton:!0,position:"top-right",richColors:!0,style:{...tP,...e},...t})}let tA=[{id:"1",name:"Northstar",status:"Ready",owner:"Alex"},{id:"2",name:"Harbor",status:"Review",owner:"Mina"},{id:"3",name:"Field notes",status:"Draft",owner:"Sam"}],t$=[{key:"name",header:"Project",sortable:!0},{key:"status",header:"Status"},{key:"owner",header:"Owner"}],tD=[{value:"ready",label:"Ready"},{value:"review",label:"In review"},{value:"draft",label:"Draft"}],tR=[{label:"Save changes",variant:"default",fire:()=>tS.oR.success("Changes saved",{description:"The success tone, from the Sonner provider your starter ships."})},{label:"Delete project",variant:"destructive",fire:()=>tS.oR.error("Project deleted",{description:"The error tone, from the same provider."})}],tF=["success","loading","empty","error"];function tB({state:e,open:t,onOpenChange:a}){let r=W(e),n="dark"===e.themeMode?"dark":"light",[i,l]=(0,s.useState)(n),[c,d]=(0,s.useState)(n);n!==c&&(d(n),l(n));let p="dark"===i?r.dark:r.light,u={colorScheme:i,"--background":p.background,"--foreground":p.foreground,"--card":p.card,"--card-foreground":p.cardForeground,"--popover":p.popover,"--popover-foreground":p.popoverForeground,"--primary":p.primary,"--primary-foreground":p.primaryForeground,"--secondary":p.secondary,"--secondary-foreground":p.secondaryForeground,"--accent":p.accent,"--accent-foreground":p.accentForeground,"--muted":p.muted,"--muted-foreground":p.mutedForeground,"--destructive":p.destructive,"--destructive-foreground":p.destructiveForeground,"--border":p.border,"--input":p.input,"--ring":p.ring,"--status-success":p.success,"--status-warning":p.warning,"--status-info":p.info,"--radius":r.shape.radius,...Object.fromEntries(K.map(e=>[`--radius-${e.name}`,V(r.shape.radius,e)])),"--shadow-sm":r.shape.sm,"--shadow-md":r.shape.md,"--shadow-lg":r.shape.lg,"--control-height":r.spacing.control,"--space-unit":r.spacing.space,"--motion-fast":r.motion.fast,"--motion-normal":r.motion.normal,"--motion-easing":r.motion.easing,...Object.fromEntries(r.typeScale.flatMap(e=>[[`--scale-${e.key}`,e.size],[`--scale-${e.key}-leading`,e.lineHeight],[`--scale-${e.key}-weight`,String(e.weight)]])),"--font-heading":r.typography.heading,"--font-sans":r.typography.sans,"--font-mono":r.typography.mono},m=`[data-radix-popper-content-wrapper],[data-slot="popover-content"]{${Object.entries(u).map(([e,t])=>`${e.startsWith("--")?e:e.replace(/[A-Z]/g,e=>`-${e.toLowerCase()}`)}:${t}`).join(";")}}`,[h,g]=(0,s.useState)("success"),[y,f]=(0,s.useState)(""),b=et(e.projectType).includes("toast-provider"),v=[["Primary",p.primary],["Secondary",p.secondary],["Accent",p.accent]],x=[["Muted",p.muted],["Border",p.border],["Destructive",p.destructive],["Success",p.success],["Warning",p.warning],["Info",p.info]];return(0,o.jsxs)("section",{className:"token-panel","aria-label":"Generated design tokens",children:[(0,o.jsxs)("header",{className:"token-panel-head",children:[(0,o.jsxs)("button",{"aria-controls":"token-panel-body","aria-expanded":t,className:"token-panel-toggle",onClick:()=>a(!t),type:"button",children:[(0,o.jsxs)("span",{className:"section-label",children:[(0,o.jsx)("span",{className:"section-number",children:"TOKENS"})," Read from your choices, not mocked up"]}),(0,o.jsxs)("span",{className:"token-panel-state",children:[t?"Collapse":"Expand",(0,o.jsx)("svg",{"aria-hidden":"true",className:"token-panel-chevron",viewBox:"0 0 16 16",children:(0,o.jsx)("path",{d:"M3.5 6 L8 10.5 L12.5 6"})})]})]}),t?(0,o.jsx)("div",{className:"token-scheme",role:"radiogroup","aria-label":"Preview color scheme",children:["light","dark"].map(e=>(0,o.jsxs)("label",{className:i===e?"is-selected":"",children:[(0,o.jsx)("input",{type:"radio",name:"token-scheme",value:e,checked:i===e,onChange:()=>l(e)}),(0,o.jsx)("span",{children:"light"===e?"Light":"Dark"})]},e))}):null]}),t?(0,o.jsx)("style",{dangerouslySetInnerHTML:{__html:m}}):null,t?(0,o.jsxs)("div",{className:"token-canvas",id:"token-panel-body",style:u,children:[(0,o.jsxs)("div",{className:"token-block",children:[(0,o.jsx)("h3",{children:"Color"}),(0,o.jsx)("div",{className:"token-swatch-row",children:v.map(([e,t])=>(0,o.jsxs)("div",{className:"token-swatch",children:[(0,o.jsx)("span",{className:"token-chip",style:{background:t,color:G(t)},children:"Aa"}),(0,o.jsxs)("span",{className:"token-swatch-text",children:[(0,o.jsx)("strong",{children:e}),(0,o.jsxs)("span",{children:[(0,o.jsx)("small",{children:t}),(0,o.jsxs)("small",{className:"token-ratio",children:[H(G(t),t).toFixed(1),":1"]})]})]})]},e))}),(0,o.jsx)("div",{className:"token-dot-row",children:x.map(([e,t])=>(0,o.jsxs)("span",{className:"token-dot",children:[(0,o.jsx)("i",{style:{background:t}}),e]},e))}),(0,o.jsxs)("p",{className:"token-note",children:["Body text on this surface: ",H(p.foreground,p.background).toFixed(2),":1"]})]}),(0,o.jsxs)("div",{className:"token-block",children:[(0,o.jsx)("h3",{children:"Type"}),(0,o.jsx)("ul",{className:"token-scale",children:r.typeScale.map(e=>(0,o.jsxs)("li",{children:[(0,o.jsx)("span",{className:"token-specimen",style:{fontFamily:r.typography[e.role],fontSize:e.size,fontWeight:e.weight,lineHeight:e.lineHeight},children:"mono"===e.role?"01":"Aa"}),(0,o.jsxs)("span",{className:"token-scale-meta",children:[(0,o.jsx)("strong",{children:e.label}),(0,o.jsxs)("small",{children:[U(e.size)," \xb7 ",e.weight," \xb7 ",e.lineHeight]})]})]},e.key))})]}),(0,o.jsxs)("div",{className:"token-block",children:[(0,o.jsx)("h3",{children:"Shape, elevation, motion"}),(0,o.jsx)("div",{className:"token-radius-row",children:K.map(e=>(0,o.jsxs)("span",{className:"token-radius",children:[(0,o.jsx)("i",{style:{borderRadius:V(r.shape.radius,e)}}),(0,o.jsxs)("small",{children:[e.name,(0,o.jsx)("br",{}),V(r.shape.radius,e)]})]},e.name))}),(0,o.jsx)("div",{className:"token-elevation-row",children:[["sm",r.shape.sm],["md",r.shape.md],["lg",r.shape.lg]].map(([e,t])=>(0,o.jsx)("span",{className:"token-elevation",style:{boxShadow:"none"===t?void 0:t,borderRadius:U(r.shape.radius,.8)},children:"none"===t?"flat":e},e))}),(0,o.jsxs)("div",{className:"token-control-row",children:[(0,o.jsx)("button",{className:"token-control",type:"button",children:"Hover me"}),(0,o.jsxs)("small",{children:["control ",U(r.spacing.control)," \xb7 unit ",U(r.spacing.space)," \xb7 ",r.motion.normal," ",r.motion.easing.startsWith("cubic")?"eased":r.motion.easing]})]})]}),(0,o.jsxs)("div",{className:"token-block token-block-wide",children:[(0,o.jsxs)("div",{className:"token-block-head",children:[(0,o.jsx)("h3",{children:"Components"}),(0,o.jsx)("small",{children:"the same source your starter ships"})]}),(0,o.jsx)("div",{className:"token-buttons",children:tR.map(e=>(0,o.jsx)("button",{className:"destructive"===e.variant?"token-control token-control-destructive":"token-control",onClick:b?e.fire:void 0,type:"button",children:e.label},e.label))}),(0,o.jsxs)("div",{className:"token-demo-row",children:[(0,o.jsxs)("div",{className:"token-demo-combo",children:[(0,o.jsx)("span",{className:"token-demo-label",children:"ComboBox"}),(0,o.jsx)(th,{options:tD,value:y,onValueChange:f,clearable:!0,placeholder:"Filter projects"})]}),(0,o.jsxs)("div",{className:"token-demo-states",role:"group","aria-label":"Async state",children:[(0,o.jsx)("span",{className:"token-demo-label",children:"DataTable state"}),(0,o.jsx)("div",{className:"token-demo-buttons",children:tF.map(e=>(0,o.jsx)("button",{"aria-pressed":h===e,className:"token-control token-control-sm",onClick:()=>g(e),type:"button",children:e},e))})]})]}),(0,o.jsx)(tx,{columns:t$,rows:"empty"===h?[]:tA,state:h,selectable:!0,pageSize:3,onRetry:()=>g("success")}),b?(0,o.jsx)(tM,{theme:i}):null]})]}):null]})}let tE=[["primary","Primary"],["secondary","Secondary"],["accent","Accent"]],tO=[{eyebrow:"01 / 07",title:"What should we call this build?",description:"Give the next AI model a name it can carry through the brief."},{eyebrow:"02 / 07",title:"What are you building?",description:"The project type controls the composition and the starter patterns Forge includes."},{eyebrow:"03 / 07",title:"Which framework should this ship on?",description:"Forge writes a bootable project for the framework you pick, and takes its shadcn components from that framework's distribution."},{eyebrow:"04 / 07",title:"What colors should the system repeat?",description:"Name the primary, secondary, and accent signals your AI should preserve."},{eyebrow:"05 / 07",title:"What should the interface sound like?",description:"Set the type voice and corner language before the first component is composed."},{eyebrow:"06 / 07",title:"Does the build have a mark or density preference?",description:"Add a logo if you have one and choose how much information should fit on screen."},{eyebrow:"07 / 07",title:"Package the context for your AI.",description:"Generate the design system, prompt, config, setup script, and a real ZIP when the brief feels right."}];function tL(){let e,[t,a]=(0,s.useState)(d),[r,n]=(0,s.useState)({primary:d.primary,secondary:d.secondary,accent:d.accent}),[i,l]=(0,s.useState)(!1),[p,f]=(0,s.useState)(0),[v,x]=(0,s.useState)(!1),[w,S]=(0,s.useState)(!0),[k,N]=(0,s.useState)(""),[C,P]=(0,s.useState)(!1),[M,A]=(0,s.useState)(!1),$=(0,s.useRef)(null),R=(0,s.useRef)(null),F=(0,s.useRef)(null);(0,s.useEffect)(()=>{try{let e=window.localStorage.getItem("forge-state-v1");if(e){let t=D(JSON.parse(e));a(t),n({primary:t.primary,secondary:t.secondary,accent:t.accent})}}catch{}finally{A(!0)}},[]),(0,s.useEffect)(()=>{if(!M)return;let{logoDataUrl:e,logoFileName:a,...o}=t;window.localStorage.setItem("forge-state-v1",JSON.stringify({...o,logoDataUrl:null,logoFileName:null}))},[t,M]),(0,s.useEffect)(()=>{i&&R.current?.focus()},[p,i]);let B=(e,t)=>a(a=>({...a,[e]:t})),E=e=>{N(e),P(!0),$.current&&clearTimeout($.current),$.current=setTimeout(()=>P(!1),2600)},O=async e=>{try{await navigator.clipboard.writeText(e)}catch{let t=document.createElement("textarea");t.value=e,t.style.position="fixed",t.style.opacity="0",document.body.appendChild(t),t.select(),document.execCommand("copy"),t.remove()}E("Copied to clipboard")},L=(e,t)=>{let a=URL.createObjectURL(e),o=document.createElement("a");o.href=a,o.download=t,o.style.display="none",document.body.appendChild(o),o.click(),o.remove(),window.setTimeout(()=>URL.revokeObjectURL(a),1e3),E("File downloaded")},I=t.projectName.trim()||"Untitled project";e=j([t.headingFont,t.bodyFont]),(0,s.useEffect)(()=>{let t="forge-google-font-preview",a=document.getElementById(t);if(!e)return void a?.remove();let o=a??document.createElement("link");o.id=t,o.rel="stylesheet",o.href!==e&&(o.href=e),a||document.head.append(o)},[e]);let z=g[t.framework],H=b(t.framework),G=I.toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/(^-|-$)/g,"")||"forge-project",U=`${(p+1)/tO.length*100}%`,K=p>=3&&p<tO.length-1;return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)("div",{className:"app-shell",children:[(0,o.jsx)(e5,{activeStep:i?p<=2?"project-step":p<=5?"system-step":"output-step":"",onStepSelect:e=>{l(!0),f("project-step"===e?0:"system-step"===e?3:6)}}),(0,o.jsxs)("main",{id:"main-content",className:"main-content",children:[(0,o.jsxs)("header",{className:"topbar",children:[(0,o.jsxs)("div",{className:"topbar-context",children:[(0,o.jsx)("span",{className:"topbar-kicker",children:"WORKSPACE / 001"}),(0,o.jsx)("span",{className:"topbar-divider","aria-hidden":"true"}),(0,o.jsx)("span",{children:I})]}),(0,o.jsxs)("div",{className:"topbar-actions",children:[(0,o.jsxs)("span",{className:"save-state",children:[(0,o.jsx)("span",{className:"save-dot"}),(0,o.jsx)("span",{children:"Draft saved locally"})]}),(0,o.jsx)("button",{className:"icon-button",type:"button",onClick:()=>{a(d),n({primary:d.primary,secondary:d.secondary,accent:d.accent}),l(!1),f(0),window.localStorage.removeItem("forge-state-v1"),E("Draft reset to the Forge defaults")},"aria-label":"Reset project",title:"Reset project",children:"↻"})]})]}),(0,o.jsx)("div",{className:"content-wrap",children:i?(0,o.jsx)("div",{className:"builder-layout",children:(0,o.jsx)("div",{className:"form-column",children:(0,o.jsxs)("section",{id:"builder-wizard",className:"builder-section wizard-section","aria-labelledby":"wizard-title",children:[(0,o.jsxs)("div",{className:"wizard-progress",children:[(0,o.jsx)("span",{className:"wizard-progress-track",children:(0,o.jsx)("span",{style:{width:U}})}),(0,o.jsx)("span",{children:tO[p].eyebrow})]}),(0,o.jsxs)("div",{className:"wizard-heading",children:[(0,o.jsxs)("p",{className:"section-label",children:[(0,o.jsx)("span",{className:"section-number",children:tO[p].eyebrow.split(" ")[0]})," ",p<3?"Shape the project":p<6?"Lock the system":"Package the handoff"]}),(0,o.jsx)("h2",{id:"wizard-title",children:tO[p].title}),(0,o.jsx)("p",{children:tO[p].description})]}),(0,o.jsxs)("div",{ref:R,className:"wizard-body",tabIndex:-1,children:[0===p?(0,o.jsxs)("div",{className:"wizard-question-field",children:[(0,o.jsx)("label",{htmlFor:"project-name",children:"Project name"}),(0,o.jsxs)("div",{className:"input-frame",children:[(0,o.jsx)("input",{id:"project-name",autoFocus:!0,type:"text",value:t.projectName,onChange:e=>B("projectName",e.target.value),autoComplete:"off",maxLength:48}),(0,o.jsx)("span",{className:"input-suffix",children:".app"})]}),(0,o.jsx)("p",{className:"field-help",children:"This becomes the working name in the generated README, prompt, and ZIP filename."})]}):1===p?(0,o.jsxs)("fieldset",{className:"wizard-choice-field",children:[(0,o.jsx)("legend",{children:"Project type"}),(0,o.jsx)("div",{className:"choice-grid project-choices",children:["dashboard","landing","web-app"].map(e=>(0,o.jsxs)("label",{className:`choice-card ${t.projectType===e?"is-selected":""}`,children:[(0,o.jsx)("input",{type:"radio",name:"project-type",value:e,checked:t.projectType===e,onChange:()=>B("projectType",e)}),(0,o.jsx)("span",{className:"choice-icon","aria-hidden":"true",children:"dashboard"===e?"▦":"landing"===e?"↗":"⌑"}),(0,o.jsxs)("span",{className:"choice-copy",children:[(0,o.jsx)("strong",{children:"web-app"===e?"Web app":"landing"===e?"Landing page":"Dashboard"}),(0,o.jsx)("small",{children:"dashboard"===e?"Data, controls, dense views":"landing"===e?"Story, proof, conversion":"Product flows, workspace UI"})]}),(0,o.jsx)("span",{className:"choice-check","aria-hidden":"true",children:"✓"})]},e))})]}):2===p?(0,o.jsxs)("fieldset",{className:"wizard-choice-field",children:[(0,o.jsx)("legend",{children:"Framework and package manager"}),(0,o.jsxs)("div",{className:"stack-row wizard-stack-row",children:[(0,o.jsxs)("label",{className:"select-wrap framework-select",htmlFor:"framework",children:[(0,o.jsx)("span",{className:"sr-only",children:"Framework"}),(0,o.jsx)("select",{id:"framework",value:t.framework,onChange:e=>B("framework",e.target.value),children:y.map(e=>(0,o.jsx)("optgroup",{label:`${h[e.family]} \xb7 ${m[e.family].name}`,children:e.frameworks.map(e=>(0,o.jsx)("option",{value:e,children:g[e].label},e))},e.family))}),(0,o.jsx)("span",{className:"select-chevron",children:"⌄"})]}),(0,o.jsxs)("div",{className:"stack-chip is-locked",children:[(0,o.jsx)("span",{className:"stack-chip-icon",children:h[z.family][0]}),(0,o.jsx)("span",{children:H.name}),(0,o.jsx)("span",{className:"lock-icon","aria-label":"Included",children:"⌁"})]}),(0,o.jsxs)("label",{className:"select-wrap compact-select",htmlFor:"package-manager",children:[(0,o.jsx)("span",{className:"sr-only",children:"Package manager"}),(0,o.jsxs)("select",{id:"package-manager",value:t.packageManager,onChange:e=>B("packageManager",e.target.value),children:[(0,o.jsx)("option",{value:"pnpm",children:"pnpm"}),(0,o.jsx)("option",{value:"npm",children:"npm"}),(0,o.jsx)("option",{value:"yarn",children:"yarn"})]}),(0,o.jsx)("span",{className:"select-chevron",children:"⌄"})]})]}),(0,o.jsxs)("p",{className:"field-help",children:[z.tagline," ",H.cliPackage?(0,o.jsxs)(o.Fragment,{children:["Components are added with the ",H.name," CLI and land in"," ",(0,o.jsx)("code",{children:z.layout.uiDir}),"."]}):(0,o.jsxs)(o.Fragment,{children:["There is no component CLI — Forge writes the primitives into"," ",(0,o.jsx)("code",{children:z.layout.uiDir})," for you."]})]})]}):3===p?(0,o.jsxs)("fieldset",{className:"wizard-choice-field",children:[(0,o.jsx)("legend",{children:"Brand palette"}),(0,o.jsxs)("label",{className:"field-group preset-field",children:[(0,o.jsx)("span",{children:"Start from a system preset"}),(0,o.jsxs)("span",{className:"select-wrap",children:[(0,o.jsxs)("select",{value:t.presetKey,onChange:e=>(e=>{if("custom"===e)return B("presetKey","custom");let o={...t,...T[e].values,presetKey:e};a(o),n({primary:o.primary,secondary:o.secondary,accent:o.accent}),E(`${T[e].name} preset applied`)})(e.target.value),children:[(0,o.jsx)("option",{value:"neutral-product",children:"Neutral product"}),(0,o.jsx)("option",{value:"editorial-studio",children:"Editorial studio"}),(0,o.jsx)("option",{value:"bold-commerce",children:"Bold commerce"}),(0,o.jsx)("option",{value:"custom",children:"Custom"})]}),(0,o.jsx)("span",{className:"select-chevron",children:"⌄"})]})]}),(0,o.jsx)("div",{className:"color-grid",children:tE.map(([e,s])=>(0,o.jsx)(e4,{id:`${e}-color`,label:s,value:t[e],draft:r[e],onValueChange:t=>{let o;return o=t.toUpperCase(),void(a(t=>({...t,[e]:o,presetKey:"custom"})),n(t=>({...t,[e]:o})))},onDraftChange:t=>{let o;return o=t.toUpperCase(),void(n(t=>({...t,[e]:o})),/^#[0-9A-F]{6}$/.test(o)&&a(t=>({...t,[e]:o,presetKey:"custom"})))},onDraftBlur:()=>n(a=>({...a,[e]:t[e]}))},e))})]}):4===p?(0,o.jsxs)("div",{className:"wizard-system-fields",children:[(0,o.jsxs)("div",{className:"wizard-dual-field",children:[(0,o.jsxs)("label",{className:"field-group field-grow",children:[(0,o.jsx)("span",{children:"Type voice"}),(0,o.jsxs)("span",{className:"select-wrap",children:[(0,o.jsxs)("select",{value:t.typeVoice,onChange:e=>a(t=>({...t,typeVoice:e.target.value,presetKey:"custom"})),children:[(0,o.jsx)("option",{value:"instrument",children:"Geist / Utility"}),(0,o.jsx)("option",{value:"editorial",children:"Newsreader / Editorial"}),(0,o.jsx)("option",{value:"system",children:"System Sans / Familiar"})]}),(0,o.jsx)("span",{className:"select-chevron",children:"⌄"})]})]}),(0,o.jsxs)("fieldset",{className:"field-group field-grow",children:[(0,o.jsx)("legend",{children:"Corner language"}),(0,o.jsx)("div",{className:"segmented-control",role:"radiogroup","aria-label":"Corner language",children:["sharp","soft","round"].map(e=>(0,o.jsxs)("label",{className:t.radius===e?"is-selected":"",children:[(0,o.jsx)("input",{type:"radio",name:"radius",value:e,checked:t.radius===e,onChange:()=>a(t=>({...t,radius:e,presetKey:"custom"}))}),(0,o.jsx)("span",{children:e[0].toUpperCase()+e.slice(1)})]},e))})]})]}),(0,o.jsxs)("div",{className:"wizard-dual-field",children:[(0,o.jsx)(e3,{id:"heading-font",label:"Headline font",presetLabel:u[t.typeVoice].split(" / ")[0],value:t.headingFont,onChange:e=>a(t=>({...t,headingFont:e,presetKey:"custom"}))}),(0,o.jsx)(e3,{id:"body-font",label:"Body font",presetLabel:u[t.typeVoice].split(" / ")[0],value:t.bodyFont,onChange:e=>a(t=>({...t,bodyFont:e,presetKey:"custom"}))})]}),(0,o.jsx)("p",{className:"field-help",children:"Search is local — the family index ships with Forge. Selecting one loads that webfont from fonts.googleapis.com for the preview, and the generated stylesheet imports it the same way."}),(0,o.jsxs)("div",{className:"wizard-triple-field",children:[(0,o.jsxs)("label",{className:"field-group",children:[(0,o.jsx)("span",{children:"Theme"}),(0,o.jsxs)("span",{className:"select-wrap",children:[(0,o.jsxs)("select",{value:t.themeMode,onChange:e=>a(t=>({...t,themeMode:e.target.value,presetKey:"custom"})),children:[(0,o.jsx)("option",{value:"system",children:"Follow system"}),(0,o.jsx)("option",{value:"light",children:"Light"}),(0,o.jsx)("option",{value:"dark",children:"Dark"})]}),(0,o.jsx)("span",{className:"select-chevron",children:"⌄"})]})]}),(0,o.jsxs)("label",{className:"field-group",children:[(0,o.jsx)("span",{children:"Elevation"}),(0,o.jsxs)("span",{className:"select-wrap",children:[(0,o.jsxs)("select",{value:t.shadowStyle,onChange:e=>a(t=>({...t,shadowStyle:e.target.value,presetKey:"custom"})),children:[(0,o.jsx)("option",{value:"flat",children:"Flat"}),(0,o.jsx)("option",{value:"soft",children:"Soft"}),(0,o.jsx)("option",{value:"layered",children:"Layered"})]}),(0,o.jsx)("span",{className:"select-chevron",children:"⌄"})]})]}),(0,o.jsxs)("label",{className:"field-group",children:[(0,o.jsx)("span",{children:"Motion"}),(0,o.jsxs)("span",{className:"select-wrap",children:[(0,o.jsxs)("select",{value:t.motionStyle,onChange:e=>a(t=>({...t,motionStyle:e.target.value,presetKey:"custom"})),children:[(0,o.jsx)("option",{value:"reduced",children:"Reduced"}),(0,o.jsx)("option",{value:"subtle",children:"Subtle"}),(0,o.jsx)("option",{value:"expressive",children:"Expressive"})]}),(0,o.jsx)("span",{className:"select-chevron",children:"⌄"})]})]})]})]}):5===p?(0,o.jsxs)("div",{className:"wizard-dual-field wizard-brand-field",children:[(0,o.jsxs)("fieldset",{className:"field-group field-grow",children:[(0,o.jsx)("legend",{children:"Mark"}),(0,o.jsxs)("div",{className:"upload-row",children:[(0,o.jsxs)("label",{className:"upload-zone",htmlFor:"logo-upload",children:[(0,o.jsx)("input",{id:"logo-upload",type:"file",accept:"image/png,image/jpeg,image/svg+xml,image/webp",onChange:e=>(e=>{if(!e)return;if(e.size>5242880)return void E("Keep the logo under 5MB");let t=new FileReader;t.onload=()=>a(a=>({...a,logoFileName:e.name,logoDataUrl:String(t.result)})),t.readAsDataURL(e)})(e.target.files?.[0])}),(0,o.jsx)("span",{className:"upload-symbol",children:"+"}),(0,o.jsxs)("span",{children:[(0,o.jsx)("strong",{children:t.logoFileName||"Drop a logo or browse"}),(0,o.jsx)("small",{children:"PNG, SVG, JPG \xb7 5MB max"})]})]}),(0,o.jsx)("div",{className:"mark-preview","aria-label":"Logo preview",children:t.logoDataUrl?(0,o.jsx)("img",{src:t.logoDataUrl,alt:"Uploaded logo preview"}):(0,o.jsx)("span",{className:"mark-placeholder",children:I.slice(0,2).toUpperCase()})})]})]}),(0,o.jsxs)("fieldset",{className:"field-group field-grow",children:[(0,o.jsx)("legend",{children:"Interface density"}),(0,o.jsx)("div",{className:"density-options",role:"radiogroup","aria-label":"Interface density",children:["airy","balanced","dense"].map(e=>(0,o.jsxs)("label",{className:`density-card ${t.density===e?"is-selected":""}`,children:[(0,o.jsx)("input",{type:"radio",name:"density",value:e,checked:t.density===e,onChange:()=>a(t=>({...t,density:e,presetKey:"custom"}))}),(0,o.jsxs)("span",{className:`density-bars ${e}-bars`,children:[(0,o.jsx)("i",{}),(0,o.jsx)("i",{}),(0,o.jsx)("i",{})]}),(0,o.jsxs)("span",{children:[(0,o.jsx)("strong",{children:e[0].toUpperCase()+e.slice(1)}),(0,o.jsx)("small",{children:"airy"===e?"Room to think":"dense"===e?"More signal per screen":"Clear and capable"})]})]},e))})]})]}):(0,o.jsxs)("div",{className:"wizard-handoff-card",children:[(0,o.jsxs)("div",{className:"output-card",children:[(0,o.jsxs)("div",{className:"output-card-header",children:[(0,o.jsxs)("div",{children:[(0,o.jsxs)("span",{className:"file-type",children:["BOOTABLE ",z.label.toUpperCase()," STARTER / ZIP"]}),(0,o.jsxs)("strong",{children:[G,"-starter"]})]}),(0,o.jsx)("span",{className:"output-version",children:"v0.3 / portable"})]}),(0,o.jsxs)("div",{className:"file-list",children:[(0,o.jsxs)("div",{children:[(0,o.jsx)("span",{className:"file-icon",children:h[z.family][0]}),(0,o.jsxs)("span",{children:[z.layout.entry," + package.json"]}),(0,o.jsx)("span",{className:"file-note",children:"bootable project"})]}),(0,o.jsxs)("div",{children:[(0,o.jsx)("span",{className:"file-icon",children:"◒"}),(0,o.jsx)("span",{children:z.layout.styles}),(0,o.jsx)("span",{className:"file-note",children:"semantic tokens"})]}),(0,o.jsxs)("div",{children:[(0,o.jsx)("span",{className:"file-icon",children:"▸"}),(0,o.jsx)("span",{children:"setup.sh"}),(0,o.jsx)("span",{className:"file-note",children:"one-command setup"})]}),(0,o.jsxs)("div",{children:[(0,o.jsx)("span",{className:"file-icon",children:"◇"}),(0,o.jsx)("span",{children:"forge.config.json"}),(0,o.jsx)("span",{className:"file-note",children:"versioned decisions"})]}),(0,o.jsxs)("div",{children:[(0,o.jsx)("span",{className:"file-icon",children:"✦"}),(0,o.jsx)("span",{children:"docs/DESIGN_SYSTEM.md"}),(0,o.jsx)("span",{className:"file-note",children:"design system spec"})]}),(0,o.jsxs)("div",{children:[(0,o.jsx)("span",{className:"file-icon",children:"✧"}),(0,o.jsx)("span",{children:"AGENTS.md + design skill"}),(0,o.jsx)("span",{className:"file-note",children:"AI guidance"})]}),(0,o.jsxs)("div",{children:[(0,o.jsx)("span",{className:"file-icon",children:"◎"}),(0,o.jsxs)("span",{children:[z.layout.patternsDir,"/"]}),(0,o.jsx)("span",{className:"file-note",children:"reusable UI"})]})]}),(0,o.jsxs)("div",{className:"dialog-actions portable-actions",children:[(0,o.jsx)("input",{ref:F,className:"sr-only",type:"file",accept:"application/json,.json,.forge",onChange:e=>{(e=>{if(!e)return;let t=new FileReader;t.onload=()=>{try{let e=function(e){let t=JSON.parse(e);if(t&&"object"==typeof t&&"state"in t){let e=Number(t.schemaVersion??1);if(!Number.isInteger(e)||e<1)throw Error("Invalid Forge schema version");if(e>3)throw Error(`This configuration requires Forge schema ${e}`);return D(t.state)}return D(t)}(String(t.result));a(e),n({primary:e.primary,secondary:e.secondary,accent:e.accent}),E("Forge configuration imported")}catch{E("That file is not a valid Forge configuration")}},t.readAsText(e)})(e.target.files?.[0]),e.currentTarget.value=""}}),(0,o.jsx)("button",{className:"secondary-button",type:"button",onClick:()=>F.current?.click(),children:"Import config"}),(0,o.jsx)("button",{className:"secondary-button",type:"button",onClick:()=>L(new Blob([function(e){let{logoDataUrl:t,...a}=e;return JSON.stringify({schemaVersion:3,state:a},null,2)}(t)],{type:"application/json"}),`${G}.forge.json`),children:"Export config"})]}),(0,o.jsxs)("div",{className:"output-card-footer",children:[(0,o.jsxs)("p",{children:[(0,o.jsx)("span",{className:"signal-line"})," Your choices become a reusable system."]}),(0,o.jsxs)("div",{className:"output-card-actions",children:[(0,o.jsx)("button",{className:"secondary-button",type:"button",onClick:()=>L(new Blob([ey(t)],{type:"text/markdown"}),`${G}-design-system.md`),children:"Design system .md"}),(0,o.jsxs)(c,{className:"primary-button",type:"button",onClick:()=>x(!0),children:[(0,o.jsx)("span",{children:"Generate starter pack"}),(0,o.jsx)("span",{className:"button-arrow",children:"↗"})]})]})]})]}),(0,o.jsxs)("p",{className:"honest-note",children:[(0,o.jsx)("span",{children:"i"})," Generates a bootable ",z.label," repository locally with tokens, ",H.name," components, docs, AI rules, and your uploaded mark. The design system is also a standalone markdown file any agent can read."]})]}),K?(0,o.jsx)(tB,{state:t,open:w,onOpenChange:S}):null]}),(0,o.jsxs)("div",{className:"wizard-controls",children:[(0,o.jsx)("button",{className:"secondary-button",type:"button",onClick:()=>f(e=>Math.max(e-1,0)),disabled:0===p,children:"← Back"}),p<tO.length-1?(0,o.jsxs)("button",{className:"primary-button",type:"button",onClick:()=>{0!==p||t.projectName.trim()?f(e=>Math.min(e+1,tO.length-1)):E("Give the project a name first")},children:["Continue ",(0,o.jsx)("span",{className:"button-arrow",children:"→"})]}):(0,o.jsx)("span",{className:"wizard-finish-note",children:"Review the brief, then generate when ready."})]})]})})}):(0,o.jsxs)("section",{className:"welcome-screen","aria-labelledby":"page-title",children:[(0,o.jsxs)("section",{className:"intro-grid",children:[(0,o.jsxs)("div",{children:[(0,o.jsxs)("p",{className:"section-label",children:[(0,o.jsx)("span",{className:"section-number",children:"00"})," The starting line"]}),(0,o.jsx)("h1",{id:"page-title",children:"Make the first prompt carry your system."})]}),(0,o.jsxs)("div",{className:"intro-copy",children:[(0,o.jsx)("p",{children:"Forge turns a few clear choices into the tokens, structure, and context your next AI build should inherit."}),(0,o.jsxs)("span",{className:"intro-note",children:[(0,o.jsx)("span",{className:"signal-line"})," One question at a time. One useful handoff."]})]})]}),(0,o.jsxs)("div",{className:"welcome-actions",children:[(0,o.jsxs)("p",{children:[(0,o.jsx)("span",{className:"signal-line"})," Start with a short brief. Forge handles the rest."]}),(0,o.jsxs)(c,{className:"primary-button",type:"button",onClick:()=>l(!0),children:["Get started ",(0,o.jsx)("span",{className:"button-arrow",children:"→"})]})]})]})})]})]}),(0,o.jsxs)("div",{className:`toast ${C?"is-visible":""}`,role:"status","aria-live":"polite",children:[(0,o.jsx)("span",{className:"toast-icon",children:"✓"}),(0,o.jsx)("span",{children:k})]}),(0,o.jsx)(e1,{open:v,state:t,onClose:()=>x(!1),onCopy:O,onDownload:L})]})}},7210:(e,t,a)=>{Promise.resolve().then(a.bind(a,5665))}},e=>{e.O(0,[685,441,794,358],()=>e(e.s=7210)),_N_E=e.O()}]);