$(document).ready(function () {
    $('button').click(function () {
        // Menampilkan efek loading
        $('.loading').show();
        $('.card-statistik').hide();

        var countryName = $('input').val().toLowerCase();

        // Mengambil API dengan AJAX
        $.ajax({
            "url":"https://covid-193.p.rapidapi.com/statistics",
            "method": "GET",
            "data": {
                country: countryName,
            },
            "headers": {
                "X-RapidAPI-Host": "covid-193.p.rapidapi.com",
                "X-RapidAPI-Key": "45876082demshb71efca97952adep1cc84cjsnd78c4eb8a782"
            },
            success: function(res) {
                var data = res.response[0].cases;

                // Mengupdate informasi yang ditampilkan pada DOM
                $('.active-case').text(data.active);
                $('.critical-case').text(data.critical);
                $('.new-case').text(data.new);
                $('.recovered').text(data.recovered);

                // Menuliskan nama negara 
                var newCountryName = countryName.charAt(0).toUpperCase() + countryName.slice(1);
                $('.nama-negara').text(newCountryName);

                // Menyembunyikan efek loading dan menampilkan data
                $('.loading').hide();
                $('.card-statistik').show();
            },
            error: function() {
                // Menyembunyikan efek loading dan menampilkan pesan kesalahan
                $('.loading').hide();
                $('.card-statistik').hide();
                $('.error-message').text('Negara tidak ditemukan atau terjadi kesalahan.');
            }
        });
    });
});