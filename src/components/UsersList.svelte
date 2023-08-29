<script>
  import { loadUsers } from "../lib/users";
  import UserCard from "./UserCard.svelte";
</script>

{#await loadUsers()}
  <p>...</p>
{:then users}
  <div class="cards-container">
    {#each users as user}
    <UserCard
      username={user.username}
      name={user.name}
      email={user.email}
      city={user.address.city}
      suite={user.address.suite}
      street={user.address.street}
    />
  {/each}
  </div>
{/await}

<style>
  .cards-container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
  }
</style>
