<!DOCTYPE html>
<html lang="fr">
<head>
    <!-- META -->
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <!-- LINK -->
    <link rel="stylesheet" href="/src/css/style.css" />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&display=swap"
      rel="stylesheet"
    />
    <link href="https://cdn.jsdelivr.net/npm/remixicon@3.2.0/fonts/remixicon.css" rel="stylesheet">
    <!-- TITLE -->
    <title>ADMIN - TIME</title>
  </head>
  <body>
  <header>
      <a href="/"><h1>TIME \ ADMIN</h1></a>
      <button onclick="changeColor()" class="hoverEffect"><i class="ri-paint-brush-fill"></i></button>
  </header>
  <main>
    <div class="admin-container">
      <h2>Add a countdown</h2>
      <form id="add" action="/src/php/add.php" method="post">
        <div class="input-container">
          <label for="date">Choose&nbsp;a&nbsp;date</label>
          <input type="date" name="date" id="date" required>
          <div class="custom-date"><i class="ri-calendar-check-fill"></i></div>
        </div>
        <div class="input-container">
          <label for="reason">Give&nbsp;a&nbsp;reason</label>
          <input type="text" name="reason" id="reason" placeholder="e.i. my birthday" required>
        </div>
        <div class="input-container custom-checkbox">
          <label for="active">Active&nbsp;?</label>
          <div class="checkbox">
            <input type="checkbox" name="active" id="active">
            <div class="checkmark"><i class="ri-check-fill"></i></div>
          </div>
        </div>
        <button type="submit">Add</button>
      </form>
    </div>
    <div class="separator"></div>
    <div class="admin-container">
      <h2>Countdown's list</h2>
      <table id="list">
        <thead>
          <tr>
            <th>#</th>
            <th>Date</th>
            <th>Reason</th>
            <th>Active ?</th>
            <th><i class="ri-delete-bin-fill"></i></th>
          </tr>
        </thead>
        <tbody>
          <?php include("list.php"); displayList();?>
        </tbody>
      </table>
    </div>
  </main>
  <script src="/src/js/colorSwapper.js"></script>
  <script src="/src/js/delModal.js"></script>
  </body>
</html>