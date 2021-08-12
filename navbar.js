navbar=`
<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <!--ICON & 標題-->
    <a class="navbar-brand" href="#">
      <img src="https://i.imgur.com/73cBzrL.png" alt="" width="24" height="24" class="d-inline-block align-text-top">
      Yuto's Note
    </a><!--ICON & 標題結束-->
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <!--其他頁面-->
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="index.html">首頁</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="content.html">文章</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            作品集
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a class="dropdown-item" href="note.html">Js備忘錄</a></li>
          </ul>
        </li><!--下拉選單結束-->
        <!--下拉選單-->
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            更多
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a class="dropdown-item" href="login.html">登入</a></li>
            <li><a class="dropdown-item" href="download.html">下載</a></li>
          </ul>
        </li><!--下拉選單結束-->
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="about.html">關於</a>
        </li>
      </ul>
    </div><!-- 其他頁面結束 -->
  </div>
</nav>
`
document.write(navbar);