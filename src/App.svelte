<script>
  import UsersList from "./components/UsersList.svelte";
</script>

<main>
  <header>
    <a href="https://svelte.dev/">
      <img src="../public/svelte.svg" alt="Svelte Icon" />
    </a>
    <h1>Svelte Users</h1>
    <a href="https://github.com/Martydevs/svelte-fetch">
      <img src="../public/github-icon.svg" alt="Github Icon" />
    </a>
  </header>
  <UsersList />
</main>

<style>
  main {
    overflow: hidden;
    margin: 0 auto;
    width: 70%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-flow: column wrap;
  }

  header {
    border: 5px solid #000;
    margin: 1rem 0;
    padding: 1rem;
    width: 100%;
    text-align: center;
    border-radius: 10px;
    display: flex;
    flex-flow: row wrap;
    justify-content: space-evenly;
    align-items: center;
  }

  h1 {
    font-size: 34px;
    font-weight: bolder;
  }
</style>
