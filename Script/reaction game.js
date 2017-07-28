            var start = new Date().getTime();
            
            function getRandomColor() {
                "use strict";
                var letters = '0123456789ABCDEF'.split('');
    
                var color = '#';
    
                for (var i = 0; i < 6; i++ ) {
        
                    color += letters[Math.floor(Math.random() * 16)];
    
                }
    
                return color;

            }
            
            function makeShapeAppear() {
                "use strict";
                var top = Math.random() * 400;
                
                var left = Math.random() * 400;
                
                var width = (Math.random() * 200) + 100;
                
                if (Math.random() > 0.5) {
                    
                    document.getElementById("shape").style.borderRadius = "50%";
                    
                } else {
                    
                    document.getElementById("shape").style.borderRadius = "0";
                    
                }
                
                document.getElementById("shape").style.backgroundColor = getRandomColor();
                
                document.getElementById("shape").style.width = width + "px";
                
                document.getElementById("shape").style.height = width + "px";
                
                document.getElementById("shape").style.top = top + "px";
                
                document.getElementById("shape").style.left = left + "px";
    
                document.getElementById("shape").style.display = "block";
                
                start = new Date().getTime();

            }
            
            function appearAfterDelay() {
                "use strict";
                setTimeout(makeShapeAppear, Math.random() * 200);
                
            }
            
            appearAfterDelay();
            
            document.getElementById("shape").onclick = function() {
                "use strict";
                document.getElementById("shape").style.display = "none";
                
                var end = new Date().getTime();
                
                var timeTaken = (end - start) / 1000;
                var old = timeTaken;
                document.getElementById("timeTaken").innerHTML = timeTaken + "s";
				
				
                
                appearAfterDelay();
                
            };