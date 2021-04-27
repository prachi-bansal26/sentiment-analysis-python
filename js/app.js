
     $(document).ready(function(e){

        $("#upload_form").on('submit', function(e){
            e.preventDefault();
            var fileInput = document.getElementById('uploaded_file');
            var filePath = fileInput.value;
        
            // Allowing file type
            var allowedExtensions = /(\.csv)$/i;
                
            if (!allowedExtensions.exec(filePath)) {
                alert('Invalid file type. Only CSV Files are allowed.');
                fileInput.value = '';
                return false;
            } else {
                $.ajax({
                    url: "run_file.php",
                    type: "POST", 
                    data: new FormData(this),
                    contentType: false,
                    cache: false,
                    processData:false,
                    beforeSend: function(){
                        // Show image 
                        $("#loading").css("display", "block");
                        $("#demo").html("");
                    },
                    complete: function(){
                        $("#loading").css("display", "none");
                    },
                    success: function(result){
                        $("#demo").html(result);
                        var dynamic_file = $("#dynamic_file").val();
                        setTimeout(setup(dynamic_file), 10000);
                    }
                });
            }
        }); 
      });