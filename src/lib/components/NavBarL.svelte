<script lang="ts">
	import { page } from '$app/stores'; // Access the current page store
	import { get } from 'svelte/store'; // To retrieve the current page info
  
	// Function to check if the current URL starts with the given path
	function isActive(path: string) {
	  const currentPath = get(page).url.pathname; // Get the current path from the page store
	  return currentPath.startsWith(path); // Check if the current path starts with the given path
	}
  </script>
  
  <nav class="navbar">
	<img src="/logoKraton.png" alt="logoKraton" />
  
	<div class="nav-links">
	  <a href="/beranda" class:is-active={isActive('/beranda')}>Beranda</a>
	  <a href="/situsBersejarah" class:is-active={isActive('/situsBersejarah') || isActive('/detailSitus')}>Situs</a>
	  <a href="/acara/acaraAkanDatang" class:is-active={isActive('/acara') || isActive('/detailAcara') || isActive('/daftarAcara')}>Acara</a>
	  <a href="/kelompok/organisasi" class:is-active={isActive('/kelompok') || isActive('/detailOrganisasi') || isActive('/detailKomunitas')}>Kelompok</a>
	  <a href="/abdi" class:is-active={isActive('/abdi')}>Abdi</a>
	</div>
  
	<!-- User/Profile icon -->
	<div class="profile">
	  <a href="/profile">
		<img src="/iconProfile.svg" alt="Profile" class="profile-icon" />
	  </a>
	</div>
  </nav>
  
  <style>
	/* Navbar container */
	.navbar {
	  position: relative;
	  z-index: 10;
	  top: 0;
	  width: 100%;
	  padding: 1rem;
	  display: flex;
	  justify-content: space-between;
	  align-items: center;
	  background-color: #0b2e4b; /* Dark blue background */
	}
  
	/* Logo image */
	.navbar img {
	  height: 64px;
	  width: 50px;
	}
  
	/* Navigation links container */
	.nav-links {
	  display: flex;
	  gap: 2rem; /* Gap between navigation links */
	}
  
	/* Styling for each navigation link */
	.nav-links a {
	  color: #fff; /* White text color */
	  text-decoration: none;
	  font-size: 20px;
	}
  
	/* Hover effect for the navigation links */
	.nav-links a:hover {
	  color: #f1c40f; /* Yellow color on hover */
	}
  
	/* Active state styling for current navigation link */
	.nav-links a.is-active {
	  color: #e74c3c; /* Red color for active link */
	}
  
	/* Profile icon container */
	.profile {
	  display: flex;
	  align-items: center;
	  justify-content: center;
	  width: 50px;
	  height: 50px;
	  background-color: #f5f5f5; /* Light background color */
	  border-radius: 50%; /* Circular icon background */
	  overflow: hidden; /* Hide overflow if the image is too big */
	}
  
	/* Profile image icon */
	.profile-icon {
	  width: 100%;
	  height: 100%;
	  object-fit: cover; /* Ensures the image maintains its aspect ratio */
	}
  </style>
  