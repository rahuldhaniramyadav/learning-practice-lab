<?php

// Force PHP to show errors directly on the web page instead of throwing a 500 error
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

// TODO: CONFIGURATION
$bucket = "rahul-11may-s3";
$region = "ap-south-1"; // e.g., "us-east-1"

$message = "";

if ($_SERVER['REQUEST_METHOD'] == 'POST' && isset($_FILES['file'])) {
    $file = $_FILES['file'];
    $fileName = basename($file['name']);
    $filePath = $file['tmp_name'];

    if ($file['error'] === UPLOAD_ERR_OK) {
        // Construct the S3 endpoint URL
        $url = "https://{$bucket}.s3.{$region}://{$fileName}";

        // Use curl to stream the file directly to S3 using the EC2 instance role
        $ch = curl_init();
        curl_setopt($ch, CURLOPT_URL, $url);
        curl_setopt($ch, CURLOPT_PUT, true);
        curl_setopt($ch, CURLOPT_INFILE, fopen($filePath, 'r'));
        curl_setopt($ch, CURLOPT_INFILESIZE, $file['size']);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
        
        // Tells curl to fetch IAM credentials automatically from the EC2 metadata
        curl_setopt($ch, CURLOPT_AWS, true); 

        $response = curl_exec($ch);
        $httpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
        curl_close($ch);

        if ($httpCode == 200) {
            $message = "<h3 style='color:green;'>File uploaded successfully to S3! Admin can verify.</h3>";
        } else {
            $message = "<h3 style='color:red;'>Upload failed. HTTP Code: {$httpCode}. Ensure EC2 IAM role is attached.</h3>";
        }
    }
}
?>
<!DOCTYPE html>
<html>
<head><title>S3 Image Uploader</title></head>
<body>
    <h2>Upload Image File to S3 via Apache</h2>
    <?php echo $message; ?>
    <form method="POST" enctype="multipart/form-data">
        <input type="file" name="file" accept="image/*" required>
        <br><br>
        <input type="submit" value="Upload Image">
    </form>
</body>
</html>
