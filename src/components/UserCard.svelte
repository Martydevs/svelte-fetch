<script>
  export let username;
  export let name;
  export let email;
  export let city;
  export let suite;
  export let street;
</script>

<div class="card">
  <div class="card-user-data">
    <h2>All About: { username }</h2>
    <p>Name: <span>{ name }</span></p>
    <p>Email: <span>{ email }</span></p>
  </div>
  <div class="card-user-details">
    <h3>Address</h3>
    <p>City: <span>{ city }</span></p>
    <p>Suite: <span>{ suite }</span></p>
    <p>Street: <span>{ street }</span></p>
  </div>
</div>

<style>
  .card {
    height: 300px;
    border-radius: 10px;
    background-color: #202020;
    display: flex;
    flex-flow: column wrap;
    justify-content: space-evenly;
    align-items: center;
    padding: 1rem;
  }

  .card-user-data {
    display: flex;
    flex-flow: column wrap;
    justify-content: space-around;
    align-items: center;
    height: 40%;
    color: #fff;
  }

  .card-user-details {
    display: flex;
    flex-flow: column wrap;
    justify-content: space-around;
    align-items: center;
    height: 60%;
    color: #fff;
    background-color: #333;
    width: 100%;
    border-radius:10px;
  }

  p {
    font-weight: bold;
  }

  span {
    font-weight: normal;
  }

  h3, h2 {
    font-weight: bold;
    color: yellow;
  }
</style>