<template>
<div>

<div class="banner">
	<h2>If you're visiting Cebu & you want an affordable yet classy mix of modern and Spanish, come visit us!</h2>
	<div class="btnBook">
		<a class="waves-effect waves-light btn red lighten-1"><i class="material-icons left">hotel</i>Book Now!</a>
	</div>
</div>

  <div class="carousel">
    <a class="carousel-item" href="#one!"><img src="https://lorempixel.com/250/250/nature/1"></a>
    <a class="carousel-item" href="#two!"><img src="https://lorempixel.com/250/250/nature/2"></a>
    <a class="carousel-item" href="#three!"><img src="https://lorempixel.com/250/250/nature/3"></a>
    <a class="carousel-item" href="#four!"><img src="https://lorempixel.com/250/250/nature/4"></a>
    <a class="carousel-item" href="#five!"><img src="https://lorempixel.com/250/250/nature/5"></a>
  </div>
      
      
</div>
 
</template>

<script>

export default {

mounted: function() {
        $('.carousel').carousel();
        $('.parallax').parallax();
    },
  

  data () {
    return {
      
    }
  }
}


</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.btnBook {
	margin: 20px;

}
.banner{
	background-image: url('../assets/desk65.jpeg');
	color: white;
	height: 500px;
	max-width: auto;
	margin-top: auto;
	padding-top: auto; 
	position: relative;
	display: flex;
	align-items: center;

}
h2{
	margin: 0px;
	color: grey;
	background-blend-mode: color;
	font-family: 'Niconne', cursive;

	

}
.btnBook {
	position:absolute ;
	bottom: 4px;
	margin: 0 auto;
}
</style>
