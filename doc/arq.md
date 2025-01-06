# NOME DA APLICATIVO
inteligencia limitada

## DESCRIÇAO
um app que eu posso listar os eps de diferentes podcastes 

## DOMINIO
podcast feito em video

## features
    -Lista os epsodios em sessoes de categoria
        -[ciências,programação,humor,cultura nerd]
    -filtrar episodios por nome podcast

## como vou implementar
    -Listar os epsodios podcasts em sessoes de categoria 
        --retornar em uma api rest(json) nome do podcasrt,nome do epsodio, imagem de capa,link, category
```js
    [
        {
            podcastName: 'Inteligência Ltda',
            epsodio: 'TOKUSATSU: HERÓIS JAPONESES DO JASPION, CHANGEMAN E JIRAYA - Inteligência Ltda. Podcast #1067',
            idVideo: 'Ct3oyXuM9TE',
            imagemCover: 'https://i.ytimg.com/vi/Ct3oyXuM9TE/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLA3C2b6ktV5FoDgZFi27KQX5_gXiw',
            link: 'https://www.youtube.com/watch?v=Ct3oyXuM9TE',
            category:[ciências,programação,humor,cultura nerd]   
        },
        {
            podcastName: 'Inteligência Ltda',
            epsodio: 'DA INVENÇÃO DO COMPUTADOR À INTELIGÊNCIA ARTIFICIAL - FÁBIO AKITA - Inteligência Ltda. Podcast #1228',
            idVideo: 'jVxzpiDJ9Qk',
            imagemCover: 'https://i.ytimg.com/vi/jVxzpiDJ9Qk/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLBbscebUoeAggbCiB1K8dkJquQFYA',
            link: 'https://www.youtube.com/live/jVxzpiDJ9Qk',
            category:[ciências,programação,humor,cultura nerd]   
        }
    ]
```