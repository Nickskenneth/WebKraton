<script>
    import NavBarL from '$lib/components/NavBarL.svelte';
    import { goto } from '$app/navigation';
  
    // State to hold user input
    let jenisKelamin = '';
    let namaLengkap = '';
    let noTelepon = '';
  
    // State for additional guests
    let tamuLain = [];
    let guestGender = '';
    let guestName = '';
    let guestPhone = '';
  
    let adaTamuLain = 'No'; // Default value for radio button
  
    // Function to add guest data
    function tambahTamu() {
      if (guestName && guestGender && guestPhone) {
        tamuLain = [...tamuLain, { guestName, guestGender, guestPhone }];
        guestName = '';
        guestGender = '';
        guestPhone = '';
      }
    }
  
    // Function to delete a guest
    function hapusTamu(index) {
      tamuLain = tamuLain.filter((_, i) => i !== index);
    }
  
    // Function to handle RSVP submission
    function submitRSVP() {
      alert('RSVP berhasil dikirim!');
      goto('/detailAcara'); // Redirect to the event details page after RSVP
    }
  </script>
  
  <NavBarL />
  
  <section class="rsvp-container">
    <h2 class="section-title">Kirab 1 Suro</h2>
  
    <!-- Input form for RSVP -->
    <div class="form-container">
      <div class="form-group">
        <label for="jenisKelamin">Jenis Kelamin</label>
        <select id="jenisKelamin" bind:value={jenisKelamin}>
          <option value="">jenis kelamin</option>
          <option value="Laki-laki">Laki-laki</option>
          <option value="Perempuan">Perempuan</option>
        </select>
      </div>
  
      <div class="form-group">
        <label for="namaLengkap">Nama Lengkap</label>
        <input type="text" id="namaLengkap" bind:value={namaLengkap} placeholder="Nama" />
      </div>
  
      <div class="form-group">
        <label for="noTelepon">No Telepon</label>
        <input type="text" id="noTelepon" bind:value={noTelepon} placeholder="08123456789" />
      </div>
    </div>
  
    <!-- Additional guests form -->
    <div class="additional-guest-section">
      <p>Apakah ada tamu lain yang hadir? 
        <input type="radio" value="Yes" bind:group={adaTamuLain} /> Yes
        <input type="radio" value="No" bind:group={adaTamuLain} /> No
      </p>
  
      {#if adaTamuLain === 'Yes'}
        <div class="guest-inputs">
          <div class="guest-form-group">
            <input type="text" bind:value={guestName} placeholder="Nama Tamu" class="guest-input" />
            <select bind:value={guestGender} class="guest-input">
              <option value="">Jenis Kelamin</option>
              <option value="Laki-laki">Laki-laki</option>
              <option value="Perempuan">Perempuan</option>
            </select>
            <input type="text" bind:value={guestPhone} placeholder="No Telepon" class="guest-input" />
            <button class="tambah-tamu-btn" on:click={tambahTamu}>+ Tambah Data</button>
          </div>
        </div>
  
        <!-- Display added guests -->
        <div class="guest-list">
          {#each tamuLain as tamu, i}
            <div class="guest-entry">
              <input type="text" value={tamu.guestName} disabled />
              <input type="text" value={tamu.guestGender} disabled />
              <input type="text" value={tamu.guestPhone} disabled />
              <button class="hapus-tamu-btn" on:click={() => hapusTamu(i)}>Hapus</button>
            </div>
          {/each}
        </div>
      {/if}
    </div>
  
    <!-- RSVP button -->
    <button class="rsvp-btn" on:click={submitRSVP}>RSVP</button>
  </section>
  
  <!-- CSS styling -->
  <style>
    .rsvp-container {
      padding: 24px;
      max-width: 900px;
      margin: 0 auto;
    }
  
    .section-title {
      font-size: 32px;
      font-weight: bold;
      margin-bottom: 16px;
      text-align: center;
      color: #004da3; /* Dark blue color */
    }
  
    .form-container {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      gap: 16px;
      margin-bottom: 24px;
    }
  
    .form-group {
      display: flex;
      flex-direction: column;
    }
  
    .form-group label {
      font-weight: bold;
      margin-bottom: 4px;
    }
  
    .form-group input,
    .form-group select {
      padding: 8px;
      border: 1px solid #ccc;
      border-radius: 4px;
    }
  
    .additional-guest-section {
      margin-top: 24px;
    }
  
    .guest-form-group {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr auto;
      gap: 16px;
      margin-bottom: 16px;
      border: 1px solid #ccc; /* Add outline */
      padding: 8px;
      border-radius: 8px;
      background-color: #f9f9f9;
    }
  
    .guest-input {
      padding: 8px;
      border: 1px solid #ccc;
      border-radius: 4px;
    }
  
    .tambah-tamu-btn {
      padding: 8px 16px;
      background-color: green;
      color: white;
      border: none;
      border-radius: 4px;
      cursor: pointer;
    }
  
    .guest-list {
      margin-top: 16px;
    }
  
    .guest-entry {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr auto;
      gap: 16px;
      padding: 8px;
      background-color: #e0f7fa;
      border-radius: 4px;
      margin-bottom: 8px;
      border: 1px solid #ccc; /* Outline for guest entry */
    }
  
    .hapus-tamu-btn {
      padding: 8px;
      background-color: red;
      color: white;
      border: none;
      border-radius: 4px;
      cursor: pointer;
    }
  
    .rsvp-btn {
      padding: 12px 24px;
      background-color: #004da3; /* Dark blue color for RSVP */
      color: white;
      border: none;
      border-radius: 4px;
      cursor: pointer;
      margin-top: 24px;
      width: 100%;
    }
  </style>
  