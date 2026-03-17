<script>
    import background from '$lib/assets/background.jpg';
    export let data;
</script>
 
<svelte:head>
    <title>Gesart's Webshop - Electronics for all!</title>
    <meta name="description" content="Welcome to Gesart's Webshop, your one-stop destination for all things electronic. Explore our wide range of gadgets, devices, and accessories designed to enhance your digital lifestyle. From cutting-edge smartphones to high-performance laptops, we have everything you need to stay connected and entertained. Shop with confidence and discover the latest in technology at Gesart's Webshop." />
    <meta property="og:title" content="Gesart's Webshop - Electronics for all" />
    <meta property="og:image" content="{background}" />
</svelte:head>
 
<header class="h-[500px] bg-center bg-cover flex items-center justify-center"
    style="background-image: url({background})">
    <h1 class="text-5xl font-bold text-white">Electronic Devices</h1>
</header>
 
<main class="min-h-[300px] p-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
 
{#each data.products as product}
    <a href={`/products/${product.slug}`} class="border p-5 rounded-lg shadow bg-white hover:-translate-y-1 transition">
        <h2 class="text-xl font-bold mb-2">{product.name}</h2>
        <p class="text-gray-600 mb-3 overflow-hidden" style="display:-webkit-box;-webkit-line-clamp:3;-webkit-box-orient:vertical;">
            {product.description}
        </p>
        <p class="text-lg font-semibold text-blue-600">${product.price}</p>
    </a>
{/each}
 
</main>
 
<footer class="h-[300px] bg-blue-950 text-white flex items-center justify-center">
    <p>Test-Page for SEO</p>
</footer>
