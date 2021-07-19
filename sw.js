//registrar 2 const - versao do cahce - url offline
const OFFLINE_URL = 'offline.html';
const CACHE_NAME = 'v1';

//instalação do SW - guardar os arquivos cache
this.addEventListener('install', function(event){
    //adicionar arquivos no cache 
    event.waitUntil(
        caches.open(CACHE_NAME).then(function(cache){
            return cache.addAll([
                'css/style.css',
                'imgs/logo.png',
                'imgs/icon-128.png',
                'imgs/icon-256.png',
                'imgs/offline.png',
                'offline.html',
                'manifest.json'
            ])
        })
    )
    console.log('Arquivos em cache');

    //adiconar a url offline para ser executada para quando nao tiver rede
    event.waitUntil((async () => {
        console.log("Url offline pronta")
        //abrir o cache
        const cache = await caches.open(CACHE_NAME);
        //extrai a URL offline
        await cache.add(new Request(OFFLINE_URL, {cache: 'reload'}));
    })());
})

this.addEventListener('fetch', function(event){
	console.log("Entrou no fetch");
	//Primeiro vai buscar na rede - devolve o cache
	event.respondWith(
		caches.match(event.request)
		.then(response => {
			console.log("Retorna a resposta da rede...")
			//retornar resposta da rede ou do cache
			return response || fetch(event.request);
		})
		.catch(()=>{
			console.log("Retornar offline")
			//mostrar URL_OFFLINE
			return caches.match(OFFLINE_URL);
		})
	)
})