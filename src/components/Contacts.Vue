<template>
<div>
	<div class="contact-form">
		<div class="row">
    		<form class="col s12 m8">
      			<div class="row">
        			<div class="input-field col s12 m12">
        			 <i class="material-icons prefix">account_circle</i>
          				<input placeholder="" id="name" type="text" class="validate">
         			 	<label for="name">Name</label>
       				 </div>
       			</div>
     <!--  <div class="row">
        <div class="input-field col s12">
          <input disabled value="I am not editable" id="disabled" type="text" class="validate">
          <label for="disabled">Disabled</label>
        </div>
      </div> -->
     
      <div class="row">
        <div class="input-field col s12 m12">
        	<i class="material-icons prefix">email</i>
          <input id="email" type="email" class="validate">
          <label for="email" data-error="Invalid email address" data-success="Valid email address">Email</label>
        </div>
      </div>

   
  
      <div class="row">
        <div class="input-field col s12 m12">
        	<i class="material-icons prefix">message</i>
          <textarea id="message" class="materialize-textarea"></textarea>
          <label for="message">Message</label>
        </div>
      </div>

      <div class="row">
        <div class="input-field col s12 m12">
         <button class="btn waves-effect 	waves-light right" type="submit" name="action">Submit
    		<i class="material-icons right">send</i>
  		</button>
        </div>
      </div>
 
 

    </form>
    <div class="row address">
    	<div class="col s12 m4">
    		   <h4>
    		   	Come and visit Rhodora Bed and Breakfast. 
				</h4>
				<h4>
    		   	For bookings, pls contact 0947-8969558.
    		   </h4>
				

				<h5>Weekly and Montly Rates are also available!</h5>

				<p>187 Jayme Building, S. B. Cabahug St., Ibabao Mandaue City, Cebu 6014</p>
    	</div>
    </div>
 
  </div>
        
</div>




</div>







</template>

<script>
	

</script>

<style scoped>
.contact-form{
	padding-top: 50px;
}
.address h4,h5,p{
	color: gray;
	font-family: 'Niconne', cursive;
}


</style>