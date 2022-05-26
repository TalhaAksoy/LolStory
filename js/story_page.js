$(document).ready(function() 
{
    const rndInt = Math.floor(Math.random() * 5) + 1
    $(".main").prepend("<img src='./source/img/story_page_bg/wp-"+rndInt+".png' class = 'absolute top-0 left-0 -z-10 w-full h-full'>");

    const name = ['Aatrox', 'Ahri', 'Akali', 'Akshan', 'Alistar', 'Amumu', 'Anivia', 'Annie', 'Aphelios', 'Ashe', 'AurelionSol', 'Azir', 'Bard', 'Blitzcrank', 'Brand', 'Braum', 'Caitlyn', 'Camille', 'Cassiopeia', 'Chogath', 'Corki', 'Darius', 'Diana', 'DrMundo', 'Draven', 'Ekko', 'Elise', 'Evelynn', 'Ezreal', 'Fiddlesticks', 'Fiora', 'Fizz', 'Galio', 'Gangplank', 'Garen', 'Gnar', 'Gragas', 'Graves', 'Gwen', 'Hecarim', 'Heimerdinger', 'Illaoi', 'Irelia', 'Ivern', 'Janna', 'JarvanIV', 'Jax', 'Jayce', 'Jhin', 'Jinx', 'Kaisa', 'Kalista', 'Karma', 'Karthus', 'Kassadin', 'Katarina', 'Kayle', 'Kayn', 'Kennen', 'Khazix', 'Kindred', 'Kled', 'KogMaw', 'Leblanc', 'LeeSin', 'Leona', 'Lillia', 'Lissandra', 'Lucian', 'Lulu', 'Lux', 'Malphite', 'Malzahar', 'Maokai', 'MasterYi', 'MissFortune', 'MonkeyKing', 'Mordekaiser', 'Morgana', 'Nami', 'Nasus', 'Nautilus', 'Nidalee', 'Nocturne', 'Nunu', 'Neeko', 'Olaf', 'Orianna', 'Ornn', 'Pantheon', 'Poppy', 'Pyke', 'Qiyana', 'Quinn', 'Rakan', 'Rammus', 'RekSai', 'Rell', 'Renata', 'Renekton', 'Rengar', 'Riven', 'Rumble', 'Ryze', 'Samira', 'Sejuani', 'Seraphine', 'Shaco', 'Shen', 'Shyvana', 'Singed', 'Sion', 'Sivir', 'Skarner', 'Sona', 'Soraka', 'Swain', 'Syndra', 'Senna', 'Sett', 'Sylas', 'TahmKench', 'Taliyah', 'Talon', 'Taric', 'Teemo', 'Thresh', 'Tristana', 'Trundle', 'Tryndamere', 'TwistedFate', 'Twitch', 'Udyr', 'Urgot', 'Varus', 'Vayne', 'Veigar', 'Velkoz', 'Vi', 'Viego', 'Viktor', 'Vladimir', 'Volibear', 'Vex', 'Warwick', 'Xayah', 'Xerath', 'XinZhao', 'Yasuo', 'Yorick', 'Yuumi', 'Yone', 'Zac', 'Zed', 'Zeri', 'Ziggs', 'Zilean', 'Zoe', 'Zyra'];

    i = 0;
    while(i < name.length)
    {
        $(".main").append(
            "<div class = 'w-full h-28 flex'>" +
                "<div class='char_ico w-1/3 h-full flex '>" +
                    "<div class='img w-20 h-20 m-auto bg-black'>" +
                        "<img src='http://ddragon.leagueoflegends.com/cdn/12.9.1/img/champion/"+name[i]+".png' alt='' srcset='' class = 'w-full h-full char-square'>" +
                    "</div>" +
                "</div>" +
                "<div class='char_ico w-1/3 h-full flex '>" +
                    "<div class='img w-20 h-20 m-auto bg-black'>" +
                        "<img src='http://ddragon.leagueoflegends.com/cdn/12.9.1/img/champion/"+name[i + 1]+".png' alt='' srcset='' class = 'w-full h-full char-square'>" +
                    "</div>" +
                "</div>" +
                "<div class='char_ico w-1/3 h-full flex '>" +
                    "<div class='img w-20 h-20 m-auto bg-black'>" +
                        "<img src='http://ddragon.leagueoflegends.com/cdn/12.9.1/img/champion/"+name[i + 2]+".png' alt='' srcset='' class = 'w-full h-full char-square'>" +
                    "</div>" +
                "</div>" +
            "</div>");
        i = i + 3;
    }
    $(".char-square").click(function () {  
        const char_name = $(this).attr("src");
        const char_name2 = char_name.split("/");
        const char_name3 = char_name2[7].split(".");
        $(".main").prepend("<div class='card absolute top-0 w-full h-screen bg-yellow-100 pt-2 overflow-y-scroll p-6'>"+
                                "<div class = 'card-img-side w-full'>"+
                                    "<img src='"+char_name+"' alt='' class = 'card-img mx-auto mb-4'>"+
                                    "<div class='border-b-2 w-2/3 border-black mx-auto'></div>"+
                                "</div>"+
                                "<h5 class='text-gray-900 text-5xl font-medium mb-2 mt-2 text-center'>"+char_name3[0]+"</h5>"+
                                "<p class='char-story'>"+
                                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam nostrum suscipit architecto illo sapiente repellendus porro nesciunt adipisci facilis tenetur quam vel ducimus sit placeat numquam ullam, eveniet minus officia libero minima sint voluptas neque dolores nulla. Corrupti ad delectus dolorum repellat nesciunt omnis ullam cupiditate. Vitae, dolor. Dolor error eos, dolore repellat dignissimos temporibus beatae similique modi quisquam voluptas cumque, maiores id neque. Soluta ea vero cum molestias! Molestias magni soluta repudiandae ipsam perspiciatis debitis dolore, maiores qui neque animi cupiditate nobis doloribus reiciendis sunt ipsa officia laboriosam accusantium rem consectetur eligendi labore id accusamus voluptatum. Ad, atque officia?Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam nostrum suscipit architecto illo sapiente repellendus porro nesciunt adipisci facilis tenetur quam vel ducimus sit placeat numquam ullam, eveniet minus officia libero minima sint voluptas neque dolores nulla. Corrupti ad delectus dolorum repellat nesciunt omnis ullam cupiditate. Vitae, dolor. Dolor error eos, dolore repellat dignissimos temporibus beatae similique modi quisquam voluptas cumque, maiores id neque. Soluta ea vero cum molestias! Molestias magni soluta repudiandae ipsam perspiciatis debitis dolore, maiores qui neque animi cupiditate nobis doloribus reiciendis sunt ipsa officia laboriosam accusantium rem consectetur eligendi labore id accusamus voluptatum. Ad, atque officia?"+
                                "</p>"+
                            "</div>");
    });
});