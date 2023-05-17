<head>
  <title>Liberlina Links</title>
</head>
<body>
<?php
  if (isset($_GET["youtube"])) {
      header('Location: https://www.youtube.com/channel/UC9TQpslkQY1nUGdre0G13MA');
  }else if (isset($_GET["twitter"])) {
      header('Location: https://twitter.com/Liberluna_Hack');
  }else if (isset($_GET["discord"])) {
      header('Location: https://discord.com/invite/sFRVbnRCQf');
  }else if (isset($_GET["chat"])) {
      header('Location: https://line.me/ti/g2/beNFT8zr5MEL_Um5xmSBZthZwfIuZcQu8-bYMA');
  }else if (isset($_GET["page"])) {
      header('Location: https://liberluna.github.io');
  }else {
    echo "クエリが指定されていません。<a href='https://twitter.com/macl2189?openExternalBrowser=1'>@macl2189</a>でもフォローしておいて<br/>"."youtube,twitter,discord,chat,page";
  }
?>
</body>
