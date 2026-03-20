<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8"/>

<script>
var ua = navigator.userAgent.toLowerCase();

if (ua.includes("android") || ua.includes("iphone")) {
    window.location.href = "shopeevn://home?navRoute=XXX";
    setTimeout(() => {
        window.location.href = "https://shopee.vn";
    }, 1500);
} else {
    window.location.href = "https://google.com";
}
</script>

</head>
<body></body>
</html>
