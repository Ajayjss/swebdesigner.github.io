function register() {
	// body...
	<form>
     	zip code with pattern: <input type="text" name="zip_codeP" pattern="[0-9]{5}" required></br>
     	zip code with pattern: <input type="number" name="zip_codeN" min="00000" max="99999" required></br>

     </form>
     <form>
     	<fieldset>
     		<legend>Input Types</legend>
     		<label for="name">Name</label>
     	<input type="text" id="name" name="name"></br>
     	<label>Email:<input type="email" name="email"></label></br>
     	<label for="birth">Birth</label>
     	<input type="date" id="birth" value="birth"></br>
     		<label>Password:<input type="password" name="pass"></label>
     	Radio Buttons</br>
     	<label><input type="radio" name="sex" value="male" checked>Male</label>
     	<label><input type="radio" name="sex" value="female">Female</label>

     Checkboxex</br>
     <label><input type="Checkbox" name="contact1" value="Bike">Contact me via email</label>

     <label><input type="Checkbox" name="contact2" value="Bike">Contact me via Phone</label>

     <label>Number:<input type="number" name="numberInput" min="1" max="5"></label>

     <label>Range:<input type="range" name="rangeInput" min="1" max="10"></label>

     <label>Date:<input type="date" name="dateInput"></label>

     <label>URL:<input type="url" name="urlImput"></label>

       <input type="submit" value="Click Here">
     	</fieldset>
     </form>
}