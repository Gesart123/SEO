<script>
    export let data;
</script>

<svelte:head>
    <title>{data.product.name} - Gesart's Webshop</title>
    <meta name="description" content={data.product.description} />
</svelte:head>

<main class="p-6 md:p-10 max-w-5xl mx-auto">
    <div class="grid md:grid-cols-2 gap-10">
        <div class="w-full aspect-[16/9] overflow-hidden rounded-xl bg-gray-100 shadow">
            <img
                src={data.product.image_url}
                alt={data.product.name}
                class="w-full h-full object-cover"
                loading="lazy"
            />
        </div>

        <div class="space-y-4">
            <div>
                <p class="text-sm uppercase tracking-[0.2em] text-gray-500">Produkt</p>
                <h1 class="text-3xl font-bold">{data.product.name}</h1>
            </div>

            <p class="text-gray-700 leading-relaxed">{data.product.description}</p>

            <p class="text-3xl font-semibold text-blue-600">
                ${data.product.price}
            </p>

            <div class="pt-4">
                <a href="/" class="text-blue-600 hover:text-blue-800 underline">← Back to Products</a>
            </div>
        </div>
    </div>
</main>
