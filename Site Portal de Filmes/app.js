const TMDB_ENDPOINT_BASE = 'https://api.themoviedb.org/3';


// Função que cria os cards dos filmes
//Mostra na home-page os filmes em destaque
function MostraFilmesEmDestaque() 
{
    //Executar requisição AJAX

    $.ajax({
        // Passar a URL ENDPOINT BASE + /movie/now_playing
        url: TMDB_ENDPOINT_BASE + '/movie/popular',
        data: {
            api_key: '7e5891d039360cdc3705deef0c53863b'
        }
    })
        // Receber o JSON
        .done(function (data) {

            let codigo_html = '';

            // Montar os cards
            for (i = 0; i < data.results.length; i++) {

                // Concatenar o código do Card com os dados do JSON
                titulo = data.results[i].title;
                imagem = 'https://image.tmdb.org/t/p/w500' + data.results[i].poster_path;
                descricao = data.results[i].overview;
                link = 'https://www.themoviedb.org/movie/' + data.results[i].id;

                codigo_html += `<div class="col-12 col-sm-12 col-md-12 col-lg-4" style = "padding-top: 30px">
                <div class="card" style="width: 18rem;">
            <img src="${imagem}" class="card-img-top"
                alt="${titulo}">
            <div class="card-body">
                <h4 class="card-title" style = "padding-bottom: 20px">${titulo}</h4>
                <p>${descricao}</p>
                <a href="${link}" class="btn btn-primary">Abrir filme</a>
            </div>
        </div></div>`;
            }


            // Repassar os cards para a página
            $('#lista_filmes').html(codigo_html)

        });

}

//Busca o filme que o usuario deseja
function PesquisaFilmes() 
{
    texto = document.getElementById("search").value;
    $.ajax({
        url: TMDB_ENDPOINT_BASE + '/search/movie',
        data: {
            api_key: '7e5891d039360cdc3705deef0c53863b',
            query: texto
        }
    })
        // Receber o JSON
        .done(function (data) {

            let codigo_html = '';

            // Montar os cards
            for (i = 0; i < data.results.length; i++) {

                // Concatenar o código do Card com os dados do JSON
                titulo = data.results[i].title;
                imagem = 'https://image.tmdb.org/t/p/w500' + data.results[i].poster_path;
                descricao = data.results[i].overview;
                link = 'https://www.themoviedb.org/movie/' + data.results[i].id;

                codigo_html += `<div class="col-12 col-sm-12 col-md-12 col-lg-4" style = "padding-top: 30px">
                <div class="card" style="width: 18rem;">
            <img src="${imagem}" class="card-img-top"
                alt="${titulo}">
            <div class="card-body">
                <h4 class="card-title" style = "padding-bottom: 20px">${titulo}</h4>
                <p>${descricao}</p>
                <a href="${link}" class="btn btn-primary">Abrir filme</a>
            </div>
        </div></div>`;
            }
            // Repassar os cards para a página
            $('#lista_filmes').html(codigo_html)

        });
}


// Função que cria os cards dos filmes
//Filmes que estão chegando no site
function MostrarFilmesRecentes() 
{
    //Executar requisição AJAX

    $.ajax({
       
        url: TMDB_ENDPOINT_BASE + '/movie/upcoming',
        data: {
            api_key: '7e5891d039360cdc3705deef0c53863b'
        }
    })
        // Receber o JSON
        .done(function (data) {

            let codigo_html = '';

            // Montar os cards
            for (i = 0; i < data.results.length; i++) {

                // Concatenar o código do Card com os dados do JSON
                titulo = data.results[i].title;
                imagem = 'https://image.tmdb.org/t/p/w500' + data.results[i].poster_path;
                descricao = data.results[i].overview;
                link = 'https://www.themoviedb.org/movie/' + data.results[i].id;

                codigo_html += `<div class="col-12 col-sm-12 col-md-12 col-lg-4" style = "padding-top: 30px">
                <div class="card" style="width: 18rem;">
            <img src="${imagem}" class="card-img-top"
                alt="${titulo}">
            <div class="card-body">
                <h4 class="card-title" style = "padding-bottom: 20px">${titulo}</h4>
                <p>${descricao}</p>
                <a href="${link}" class="btn btn-primary">Abrir filme</a>
            </div>
        </div></div>`;
            }


            // Repassar os cards para a página
            $('#lista_filmes').html(codigo_html)

        });

}


// Função que cria os cards dos filmes
//Filmes que estão bem avaliados no site
function MostrarFilmesBemAvaliados() 
{
    //Executar requisição AJAX

    $.ajax({
       
        url: TMDB_ENDPOINT_BASE + '/movie/top_rated',
        data: {
            api_key: '7e5891d039360cdc3705deef0c53863b'
        }
    })
        // Receber o JSON
        .done(function (data) {

            let codigo_html = '';

            // Montar os cards
            for (i = 0; i < data.results.length; i++) {

                // Concatenar o código do Card com os dados do JSON
                titulo = data.results[i].title;
                imagem = 'https://image.tmdb.org/t/p/w500' + data.results[i].poster_path;
                descricao = data.results[i].overview;
                link = 'https://www.themoviedb.org/movie/' + data.results[i].id;

                codigo_html += `<div class="col-12 col-sm-12 col-md-12 col-lg-4" style = "padding-top: 30px">
                <div class="card" style="width: 18rem;">
            <img src="${imagem}" class="card-img-top"
                alt="${titulo}">
            <div class="card-body">
                <h4 class="card-title" style = "padding-bottom: 20px">${titulo}</h4>
                <p>${descricao}</p>
                <a href="${link}" class="btn btn-primary">Abrir filme</a>
            </div>
        </div></div>`;
            }


            // Repassar os cards para a página
            $('#lista_filmes').html(codigo_html)

        });

}

// Função que cria os cards dos filmes
//Filmes que estão bem avaliados no site
function MostrarSeries() 
{
    //Executar requisição AJAX

    $.ajax({
       
        url: TMDB_ENDPOINT_BASE + '/tv/popular',
        data: {
            api_key: '7e5891d039360cdc3705deef0c53863b'
        }
    })
        // Receber o JSON
        .done(function (data) {

            let codigo_html = '';

            // Montar os cards
            for (i = 0; i < data.results.length; i++) {

                // Concatenar o código do Card com os dados do JSON
                titulo = data.results[i].name;
                imagem = 'https://image.tmdb.org/t/p/w500' + data.results[i].poster_path;
                descricao = data.results[i].overview;
                link = 'https://www.themoviedb.org/tv/' + data.results[i].id;

                codigo_html += `<div class="col-12 col-sm-12 col-md-12 col-lg-4" style = "padding-top: 30px">
                <div class="card" style="width: 18rem;">
            <img src="${imagem}" class="card-img-top"
                alt="${titulo}">
            <div class="card-body">
                <h4 class="card-title" style = "padding-bottom: 20px">${titulo}</h4>
                <p>${descricao}</p>
                <a href="${link}" class="btn btn-primary">Abrir filme</a>
            </div>
        </div></div>`;
            }


            // Repassar os cards para a página
            $('#lista_filmes').html(codigo_html)

        });

}




$(document).ready(function () {

    MostraFilmesEmDestaque();
    $("#nav-inicio").click (MostraFilmesEmDestaque);
    $("#nav-filmes").click (MostraFilmesEmDestaque);
    $("#estreia-mobile").click (MostrarFilmesRecentes);
    $("#filmes-mobile").click (MostraFilmesEmDestaque);
    $("#nav-filmesAvaliados").click(MostrarFilmesBemAvaliados);
    $("#avaliacoes-mobile").click(MostrarFilmesBemAvaliados);
    $('#botaoPesquisar').click (PesquisaFilmes);
    $("#nav-series").click (MostrarSeries);
    $("#series-mobile").click (MostrarSeries);
});