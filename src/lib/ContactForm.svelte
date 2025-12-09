<script>
	// Logic for form submission would go here
</script>

<form class="contact-form">
	<div class="form-group">
		<label for="name" class="sr-only">Nombre</label>
		<input type="text" id="name" name="name" placeholder="Nombre" />
	</div>

	<div class="form-group">
		<label for="email" class="sr-only">Correo</label>
		<input type="email" id="email" name="email" placeholder="Correo" />
	</div>

	<div class="form-group">
		<label for="message">Mensaje</label>
		<textarea id="message" name="message" rows="5"></textarea>
	</div>
</form>

<style>
	.contact-form {
		display: flex;
		flex-direction: column;
		gap: 1rem;
		width: 100%;
		max-width: 500px; /* Adjust as needed */
	}

	.form-group {
		display: flex;
		flex-direction: column;
	}

	label {
		font-size: 1.2rem;
		margin-bottom: 0.5rem;
		display: none; /* Hidden as per design, using placeholders/visual cues? 
                      Actually design shows labels "Nombre", "Correo". 
                      Let's make them visible block labels like in the image design. */
		display: block;
		background-color: #d1d1d1; /* Light grey background for label/input container look? 
                                    Looking at image: Labels are inside grey boxes? 
                                    Or inputs have grey background?
                                    Image shows: "Nombre" inside a grey bar. "Correo" inside a grey bar. "Mensaje" inside a large grey box.
                                    It looks like the INPUT itself has the background and the label is the placeholder? 
                                    Or the label is above/inside?
                                    "Nombre" looks like text in the box. 
                                    Let's style inputs with grey background. */
	}

	input,
	textarea {
		background-color: #d9d9d9;
		border: none;
		padding: 0.5rem 1rem;
		font-family: inherit;
		font-size: 1rem;
		width: 100%;
		box-sizing: border-box;
	}

	input::placeholder,
	textarea::placeholder {
		color: black;
	}

	/* The design shows the text "Nombre" inside the grey box. 
     This suggests using placeholder or value. 
     But for accessibility/structure, distinct labels are better.
     However, to match the exact "look" of text inside the box:
  */

	.form-group label {
		/* If we want the label to look like the image text */
		background-color: #d9d9d9;
		padding: 0.5rem 1rem;
		margin-bottom: 0;
		width: fit-content; /* Or full width? Image shows full width bars for name/email */
		width: 100%;
		box-sizing: border-box;
		font-weight: normal;
	}

	/* Actually, looking closer at the image artifact/concept:
     There are grey bars. 
     Top bar says "Nombre".
     Middle bar says "Correo".
     Big box says "Mensaje".
     These likely function as the inputs themselves with placeholders.
  */

	input,
	textarea {
		background-color: #d9d9d9;
		border: none;
		padding: 0.8rem 1rem;
		font-size: 1.1rem;
		color: black;
	}

	.sr-only {
		/* Only hidden visually if we rely on placeholders */
		position: absolute;
		width: 1px;
		height: 1px;
		padding: 0;
		margin: -1px;
		overflow: hidden;
		clip: rect(0, 0, 0, 0);
		border: 0;
	}
</style>
