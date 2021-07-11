
 //Custom Text Header //
 // ACSII slant font

// Needs to be inside <section id="login" class="shadow">
// You must escape any backward slashes. "\\"

let custom_text_header = `
<div class="custom-text-header"> <pre> _   _            _       _   _                 _     _ 
| \ | |          (_)     | | | |               (_)   | |
|  \| | _____   ___ ___  | | | |_ __  _ __ __ _ _  __| |
| . ` |/ _ \ \ / / / __| | | | | '_ \| '__/ _` | |/ _` |
| |\  |  __/\ V /| \__ \ | |_| | | | | | | (_| | | (_| |
\_| \_/\___| \_/ |_|___/  \___/|_| |_|_|  \__,_|_|\__,_|
                                                        
                                                        </pre> </div>
`;
document.getElementById("login").innerHTML += custom_text_header
