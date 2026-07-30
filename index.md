---
layout: default
---
<style>
/* --- GLOBAL PAGE FIXES --- */

/* 1. Fix the "zooming out/button" scroll bug */
body {
  display: block !important; /* Turns off the layout-breaking body flex */
  touch-action: manipulation !important; /* Disables accidental double-tap zooming */
}
/* Center the wrapper (replaces the body flex centering) */
.wrapper {
  margin: 0 auto !important; 
}
/* --- MOBILE SPECIFIC FIXES --- */
@media (max-width: 1100px) { 
  /* 2. "Zoom out" by ~25% safely */
  body {
    font-size: 1.15em !important; /* Reduced from the global 1.5em */
  }
  /* 3. Keep wrapper margins at 90% */
  .wrapper {
    width: 90% !important;
  }
  main ul,
  main ol, 
  li {
    margin-left: 1em !important;
  }
  /* 4. Fix touch-targets on the album cards */
  .album-card {
    transform: none !important; /* Removes the 0.9 scale which can glitch mobile hitboxes */
    width: 100% !important;
  }
}
</style>

{% raw %}
<div class="social-icons">
    <a href="#one" data-tooltip="3D">
        <i class="fa-solid fa-cube"></i>
    </a>
    <a href="#two" data-tooltip="Photography">
        <i class="fa-solid fa-camera"></i>
    </a>
    <a href="#three" data-tooltip="Words">
        <i class="fa-solid fa-pen-nib"></i>
    </a>
    <a href="#four" data-tooltip="Games">
        <i class="fa-solid fa-gamepad"></i>
    </a>
    <a href="#five" data-tooltip="Fish">
        <i class="fa-regular fa-fish"></i>
    </a>
</div>
{% endraw %}

<br>

<a style="text-decoration: underline;" href="https://www.pcrf.net/">Link to: Palestine Children's Relief Fund.</a><br>
<a style="text-decoration: underline;" href="./writing/fun/albumsof2025.html">Link to: My Favorite Music of 2025</a><br> 
Last updated 7/30/2026.<br>
&copy; Dylan Rhymaun MMXXVI<br>

<div id="dropdown-sections">
    <section id="one" class="hidden">
    <br>
    <h2>3D and Doodles</h2>
    <img  alt="A BMW E30" src="assets/img/1.gif">
        <img alt="A Nissan Skyline with a rocket on its roof" src="assets/img/2.gif">
        <img alt="A small spaceship" src="assets/img/3.png">
        <img alt="A view from inside a traincar at sunset" src="assets/img/4.gif">
        <img alt="A robot falling asleep on a subway" src="assets/img/5.gif">
        <img alt="Three old sailbots on the high seas" src="assets/img/6.gif">
        <img alt="A bowl of ramen" src="assets/img/7.png">  
        <img alt="A funeral scene with cyberpunk and mideval props" src="assets/img/8.png">
        <img alt="An animated robotic arm" src="assets/img/9.gif">
        <img alt="A spaceship firing a lazer towards a planet" src="assets/img/10.gif">
        <img alt="A ferriari testarossa" src="assets/img/11.png">
        <img alt="A lego version of the character Bastion from the game Overwatch" src="assets/img/13.png">
        <img alt="A realistic rendering of tablewear" src="assets/img/15.png">
        <img alt="A gameboy" src="assets/img/16.gif">
        <img alt="An isometric view of a crashed spaceship amidst ruins in the desert" src="assets/img/17.png">
        <img alt="A first person persective of a person finding creepy obelisks in the desert" src="assets/img/18.gif">
        <img alt="Portraits of the members of the band Alt-J" src="assets/img/28.png">
        <img alt="A drawing of a man doing karate" src="assets/img/29.png">
        <img alt="A drawing of a quirky viking. " src="assets/img/30.png">
        <img alt="A drawing of the main villain from the BBC4 Show Utopia" src="assets/img/31.png">
        <img alt="A drawing of a pale woman with two different colored eyes" src="assets/img/32.png">
        <img alt="A black and white drawing of a civil war soldier" src="assets/img/33.png">
        <img alt="Another BMW E30 with high contrast" src="assets/img/20.png">
        <img alt="A mock spaceship ad" src="assets/img/21.png">
        <img alt="A fancy door" src="assets/img/22.png">
        <img alt="A lighthouse" src="assets/img/24.gif">
        <img alt="A spaceship factory" src="assets/img/25.png">
        <img alt="A cargo spaceship" src="assets/img/27.png">
        <img alt="An animation of a mock space combat game" src="assets/img/35.gif">
    </section>
    <section id="two" class="hidden">
      <br>
      <h2>Photography</h2>
        <img alt="Description" src="assets/img/turkiye2025/DSC09409.jpg">
        <img alt="Description" src="assets/img/turkiye2025/DSC09410.jpg">
        <img alt="Description" src="assets/img/turkiye2025/DSC09433.jpg">
        <img alt="Description" src="assets/img/turkiye2025/DSC09434.jpg">
        <img alt="Description" src="assets/img/turkiye2025/DSC09436.jpg">
        <img alt="Description" src="assets/img/turkiye2025/DSC09438.jpg">
        <img alt="Description" src="assets/img/turkiye2025/DSC09439.jpg">
        <!-- <img alt="Description" src="assets/img/turkiye2025/DSC09461.jpg"> -->
        <img alt="Description" src="assets/img/turkiye2025/DSC09503.jpg">
        <img alt="Description" src="assets/img/turkiye2025/DSC09511.jpg">
        <img alt="Description" src="assets/img/turkiye2025/DSC09529.jpg">
        <img alt="Description" src="assets/img/turkiye2025/DSC09536.jpg">
        <img alt="Description" src="assets/img/turkiye2025/DSC09544.jpg">
        <img alt="Description" src="assets/img/turkiye2025/DSC09553.jpg">
        <img alt="Description" src="assets/img/turkiye2025/DSC09569.jpg">
        <img alt="Description" src="assets/img/turkiye2025/DSC09588.jpg">
        <img alt="Description" src="assets/img/turkiye2025/DSC09601.jpg">
        <img alt="Description" src="assets/img/turkiye2025/DSC09604.jpg">
        <img alt="Description" src="assets/img/turkiye2025/DSC09609.jpg">
        <img alt="Description" src="assets/img/turkiye2025/DSC09615.jpg">
        <img alt="Description" src="assets/img/turkiye2025/DSC09620.jpg">
        <img alt="Description" src="assets/img/turkiye2025/DSC09621.jpg">
        <img alt="Description" src="assets/img/turkiye2025/DSC09630.jpg">
        <img alt="Description" src="assets/img/turkiye2025/DSC09632.jpg">
        <img alt="Description" src="assets/img/turkiye2025/DSC09633.jpg">
        <img alt="Description" src="assets/img/turkiye2025/DSC09650.jpg">
        <img alt="Description" src="assets/img/turkiye2025/DSC09662.jpg">
        <img alt="Description" src="assets/img/turkiye2025/DSC09667.jpg">
        <img alt="Description" src="assets/img/turkiye2025/DSC09670.jpg">
        <img alt="Description" src="assets/img/turkiye2025/DSC09689.jpg">
        <img alt="Description" src="assets/img/turkiye2025/DSC09691.jpg">
        <img alt="Description" src="assets/img/turkiye2025/DSC09694.jpg">
        <img alt="Description" src="assets/img/turkiye2025/DSC09697.jpg">
        <img alt="Description" src="assets/img/turkiye2025/DSC09711.jpg">
        <img alt="Description" src="assets/img/turkiye2025/DSC09717.jpg">
        <img alt="Description" src="assets/img/turkiye2025/DSC09719.jpg">
        <img alt="Description" src="assets/img/turkiye2025/DSC09724.jpg">
        <img alt="Description" src="assets/img/turkiye2025/DSC09725.jpg">
        <img alt="Description" src="assets/img/turkiye2025/DSC09729.jpg">
        <img alt="Description" src="assets/img/turkiye2025/DSC09751.jpg">
        <img alt="Description" src="assets/img/turkiye2025/DSC09756.jpg">
        <img alt="Description" src="assets/img/turkiye2025/DSC09765.jpg">
        <img alt="Description" src="assets/img/turkiye2025/DSC09766.jpg">
        <img alt="Description" src="assets/img/turkiye2025/DSC09769.jpg">
        <img alt="Description" src="assets/img/turkiye2025/DSC09778.jpg">
        <img alt="Description" src="assets/img/turkiye2025/DSC09782.jpg">
        <img alt="Description" src="assets/img/turkiye2025/DSC09789.jpg">
        <img alt="Description" src="assets/img/turkiye2025/DSC09798.jpg">
        <img alt="Description" src="assets/img/turkiye2025/DSC09807.jpg">
        <img alt="Description" src="assets/img/turkiye2025/DSC09813.jpg">
        <img alt="Description" src="assets/img/turkiye2025/DSC09820.jpg">
        <img alt="Description" src="assets/img/turkiye2025/DSC09823.jpg">
        <img alt="Description" src="assets/img/turkiye2025/DSC09826.jpg">
        <img alt="Description" src="assets/img/turkiye2025/DSC09828.jpg">
        <img alt="Description" src="assets/img/turkiye2025/DSC09829.jpg">
        <img alt="Description" src="assets/img/turkiye2025/DSC09830.jpg">
        <img alt="Description" src="assets/img/turkiye2025/DSC09846.jpg">
        <img alt="Description" src="assets/img/turkiye2025/DSC09848.jpg">
        <img alt="Description" src="assets/img/turkiye2025/DSC09851.jpg">
        <img alt="Description" src="assets/img/turkiye2025/DSC09860.jpg">
        <img alt="Description" src="assets/img/catalonia2025/IMG_0090.jpg">
        <img alt="Description" src="assets/img/catalonia2025/IMG_0247.jpg">
        <img alt="Description" src="assets/img/catalonia2025/IMG_0244.jpg">
        <img alt="Description" src="assets/img/catalonia2025/IMG_0144.jpg">
        <img alt="Description" src="assets/img/catalonia2025/IMG_0232.jpg">
        <img alt="Description" src="assets/img/catalonia2025/IMG_0278.jpg">
        <img alt="Description" src="assets/img/catalonia2025/IMG_0315.jpg">
        <img alt="Description" src="assets/img/catalonia2025/IMG_0091.jpg">
        <img alt="A photo of waves washing ashore. Lone Rock Point, BTV" src="assets/img/7A.jpg">
        <img alt="Clouds" src="assets/img/10.jpg">
        <img alt="Skateboarder" src="assets/img/12.JPG">
        <img alt="Tree" src="assets/img/26.jpg">
        <img alt="Silhouettes of skateboard tricks overlayed on each other" src="assets/img/19.jpg">
        <img alt="A manipulated photo of my friend siting in front of an abandoned house, though their body is pixellated" src="assets/img/34.jpg">
        <img alt="A high contrast photo of a condo in Toronto" src="assets/img/36.jpg">
        <img alt="A portrait of a model in front of UVM's taxidermy collection" src="assets/img/37.jpg">
        <img alt="A space-like image of some rocks over a still lake" src="assets/img/38.JPG">
        <img alt="A deep red sunset taken with a drone camera" src="assets/img/39.JPG">
        <img alt="A photo of the CN tower with a tree branch in front of it" src="assets/img/40.JPG">
        <img alt="A cinematic black and white landscape of a Quebec city street" src="assets/img/41.jpg">
        <img alt="A cinematic black and white landscape of another Quebec city street" src="assets/img/42.jpg">
        <img alt="A cinematic black and white landscape of the Quebec City chateau" src="assets/img/43.jpg">
        <img alt="A cinematic black and white landscape of A cathedral interior in Quebec city" src="assets/img/44.jpg">
        <img alt="A cinematic black and white landscape from inside the Quebec city chateau courtyard " src="assets/img/45.jpg">
        <img alt="A cinematic black and white landscape From the lobby of the Quebec city chateau hotel " src="assets/img/46.jpg">
    </section>
    <section id="three" class="hidden">
      <br>
      <h2>Words</h2>
      <h3>Blog</h3>
        <ul>
          <!--<li><a href="./writing/fun/favoriteAlbumsOAT.html">My Favorite Albums Spreadsheet</a></li>-->
          <li><a href="./writing/fun/albumsof2025.html">Rating every album and EP I listened to in 2025</a></li>   
          <li><a href="./writing/fun/albumsof2024.html">My 20 Favorite Albums of 2024</a></li>
          <li><a href="./writing/fun/songsof2024.html">My 20 favorite songs of 2024</a></li>
          <li><a href="./writing/fun/othermusicof2024.html">Other Music I listened to in 2024</a></li>
        </ul>
      <h3>Articles & Essays</h3>
        <ul>
          <li><a href="./writing/professional/EDLI-Portfolio.html">EDLI 6720: Managing School Library Media Centers Portfolio</a></li>
          <!--<li><a href="./writing/professional/FILENAME.html">INTERDISCIPLINARY ESSAY</a></li>-->
          <!--<li><a href="./writing/professional/FILENAME.html">EQUITY-ESSAY</a></li>-->
          <!--<li><a href="./writing/professional/FILENAME.html">RESEARCH-PROPOSAL</a></li>-->
          <li><a href="./writing/professional/timeloopsminit.html">Time Loops and Escapism in Minit</a></li>
          <li><a href="./writing/professional/moralityin10cloverfield.html">Morality in 10 Cloverfield Lane</a></li>
          <li><a href="./writing/professional/velvetbuzzsaw.html">Velvet Buzzsaw Review & Analysis</a></li>
          <li><a href="./writing/professional/comeandseereview.html">Come and See Review & Analysis</a></li>
          <li><a href="./writing/professional/20230131.html">A BIPOC perspective of the 2022 CCRPC ECOS Report</a></li>
          <li><a href="./writing/professional/20230228.html">A Vermonter’s Political Power</a></li>
          <li><a href="./writing/professional/20230531.html">Contemporary BIPOC Representation in Media</a></li>
          <!--<li><a href="./writing/professional/20230731.html">The Job Hunter’s AI</a></li> -->
          <li><a href="./writing/professional/20231031.html">The Realities of Health Inequity in Vermont</a></li>
        </ul> 
    </section>
    <section id="four" class="hidden">
    <br>
    <h2>Games</h2>                
      <h3>Galactix</h3>
      <img alt="Galactix screenshot (top down 4X tower defense)" src="assets/img/galactix.png">
      <br><a href="https://crispy-chicken.itch.io/galactix">Link to Itch.io Page</a>
      <p>I was really excited to get back into Game making for the 2024 GMTK jam, but my contributions were smaller than I hoped this year. I assembled a team of 7 this time, making it clear that I focused on 3D art, but the team took a turn and opted for a 2D game. I made the UI, title screen, player, enemy, and machine sprites, but the really impressive pixel art was done by a pixel artist I asked to join last minute. Lessons for next time I guess.</p>
      <h3>Space Ops</h3>
      <img alt="Run Cycle" src="assets/img/spaceops-running.gif">
      <br><a href="https://yaboyled.itch.io/spaceops">Link to the Itch.io Page</a>
      <p>I served as the sole artist on a team of 4 people for the 2021 GMTK game jam. Space Ops was a simple wave based top down shooter. Pretty fun to work on, not the most impressive game ever made.</p>    
    </section>
    <section id="five" class="hidden">
    <br>
    <h2>[Page Under construction] Tinned Fish Reviews</h2>                
         <ul>
          <li><a href="./writing/fish/PATH.html">Fishwife Albacore Tuna in Spicy Olive Oil</a></li>
          <li><a href="./writing/fish/PATH.html">Fishwife Smoked Salmon</a></li>
          <li><a href="./writing/fish/PATH.html">Fishwife Smoked Salmon with Sichuian Chili Crisp</a></li>
          <li><a href="./writing/fish/PATH.html">Fishwife Albacore Tuna with Lemon</a></li>
          <li><a href="./writing/fish/PATH.html">Fishwife Mussels with Sweet Pepper & Garlic</a></li>
          <li><a href="./writing/fish/PATH.html">Fishwife Sardines with Preserved Lemon</a></li>
          <li><a href="./writing/fish/PATH.html">Fishwife Smoked Trout with Red Chimichurri</a></li>
          <li><a href="./writing/fish/PATH.html">Fishwife Slow Smoked Mackerel with Chili Flakes</a></li>
          <li><a href="./writing/fish/PATH.html">Fishwife Smoked Rainbow Trout</a></li>
          <li><a href="./writing/fish/PATH.html">Porto Muinos Mussels in Marinade with Seaweed</a></li>
          <li><a href="./writing/fish/PATH.html">Maria Small Sardine in EVOO</a></li>
          <li><a href="./writing/fish/PATH.html">Crown Prince Fillet of Kippered Herring</a></li>
          <li><a href="./writing/fish/PATH.html">Trader Joe's Skipjack Tuna Filets in Olive Oil</a></li>
          <li><a href="./writing/fish/PATH.html">Real Conservera Espanola Seleccion 1920 Sarines in Olive Oil</a></li>
          <li><a href="./writing/fish/PATH.html">Iasa Branzino Filet in Olive Oil</a></li>
          <li><a href="./writing/fish/PATH.html">A Conserveira Tradicion Chlamys Varia en Salsa de Vieira</a></li>
          <li><a href="./writing/fish/PATH.html">Real Conservera Espanola Seleccion 1920 Small Sarines in Olive Oil</a></li>
          <li><a href="./writing/fish/PATH.html">Trader Joe's Grilled Sardines in Olive Oil</a></li>
          <li><a href="./writing/fish/PATH.html">Trader Joe's Wild Alaksan Pink Salmon</a></li>
          <li><a href="./writing/fish/PATH.html">Samare Clams in Brine</a></li>
          <li><a href="./writing/fish/PATH.html">Maria Mackerel with Birds Eye Chilis</a></li>
          <li><a href="./writing/fish/PATH.html">A Conserveira Tuna in Olive Oil</a></li>
          <li><a href="./writing/fish/PATH.html">Nuri Sardines in Tomato Sauce</a></li>
          <li><a href="./writing/fish/PATH.html">Faerosk Laks No 1 Salmon Filet</a></li>
          <li><a href="./writing/fish/PATH.html">Naval Tuna with Lemon and Chili</a></li>
          <li><a href="./writing/fish/PATH.html">Lata Stuffed Squid in Ink</a></li>
          <li><a href="./writing/fish/PATH.html">Samare Small Scallops in Galician Sauce</a></li>
          <li><a href="./writing/fish/PATH.html">Manna Mackerel in Mustard</a></li>
          <li><a href="./writing/fish/PATH.html">Mana Sardines in Pickling Sauce</a></li>
          <li><a href="./writing/fish/PATH.html">Herpac Yellowfin Tuna Belly</a></li>
          <li><a href="./writing/fish/PATH.html">Naval Portugese Cod</a></li>
          <li><a href="./writing/fish/PATH.html">Patagonia Spicy White Anchovies in EVOO</a></li>
          <li><a href="./writing/fish/PATH.html">Wild Planet Sardines with Lemon</a></li>
          <li><a href="./writing/fish/PATH.html">Manna Mackerel w Lemon and Thyme</a></li>
          <li><a href="./writing/fish/PATH.html">Brunswick Sardines with Jalapeno</a></li>
          <li><a href="./writing/fish/PATH.html">Acor Salmon / Porto Muinos Sea Spaghetti</a></li>
          <li><a href="./writing/fish/PATH.html">Maria Tuna in EVOO</a></li>
          <li><a href="./writing/fish/PATH.html">Nazarena Skinless, Boneless Sardines in Olive Oil</a></li>
          <li><a href="./writing/fish/PATH.html">Conservas De Combados Octopus in Galician Sauce</a></li>
          <li><a href="./writing/fish/PATH.html">Nuri Mackerel / Seed to Surf Celery Root "Whitefish"</a></li>
          <li><a href="./writing/fish/PATH.html">Nazarena Spicy Sardine Pate</a></li>
          <li><a href="./writing/fish/PATH.html">Acor Spice Tuna in Olive Oil</a></li>
        </ul> 
    </section>

</div>



