<template>
  <nav class="navbar navbar-expand-lg" style="background: #FBBF2B">
    <div class="container">

      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarTogglerDemo02"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <router-link to="/"
        ><img src="../assets/dark-logo.png" width="120" height="40"
      /></router-link>
      <div class="container-fluid">
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul
            class="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll"
            style="--bs-scroll-height: 100px"
          >
            <li class="nav-item">
              <router-link
                class="nav-link active"
                style="color: white"
                aria-current="page"
                to="/"
                >HOME</router-link
              >
            </li>
           
            <li class="nav-item">
              <router-link class="nav-link" v-if="CheckAuth" to="/myproducts"
                >EDIT PRODUCTS</router-link
              >
            </li>
            <li class="nav-item">
              <router-link class="nav-link" v-if="CheckAuth == null" to="/login"
                >LOG IN</router-link
              >
            </li>
            <li class="nav-item">
              <router-link class="nav-link" v-if="CheckAuth" to="/orders"
                >ORDER</router-link
              >
            </li>
            <li class="nav-item">
              <a
                class="nav-link"
                style="cursor: pointer"
                v-if="CheckAuth"
                v-on:click="logout"
                >LOGOUT</a
              >
            </li>
            
          </ul>
        </div>
      </div>
    </div>
  </nav>

  <router-view />
</template>

<script>
import "../Firebase";
import { getAuth, signOut, onAuthStateChanged } from "firebase/auth";
import router from "../router";
const auth = getAuth();
export default {
  name: "NavbarView",
  data() {
    return { CheckAuth: null };
  },
  methods: {
    logout() {
      signOut(auth)
        .then(() => {
          localStorage.removeItem("uidUser");
          router.push("/");
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
  created() {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        this.CheckAuth = user;
      } else {
        this.CheckAuth = null;
      }
    });
  },
  computed: {
    count() {
      return this.$store.state.count;
    },
  },
};
</script>
<style>
.cart {
  position: fixed;
  top: 15px;
  right: 40px;
  width: 35px;
  height: 35px;
  background: #44382C;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  border-radius: 5px;
}

.cart i {
  font-size: 20px;
  color: white;
}

.cart:before {
  content: attr(data-totalitems);
  font-size: 12px;
  font-weight: 600;
  position: absolute;
  top: -12px;
  right: -12px;
  background: #ff0000;
  line-height: 24px;
  padding: 0 5px;
  height: 24px;
  min-width: 24px;
  color: white;
  text-align: center;
  border-radius: 24px;
}

.cart.shake {
  -webkit-animation: shakeCart 0.4s ease-in-out forwards;
  animation: shakeCart 0.4s ease-in-out forwards;
}
.navbar-expand-lg .navbar-nav .nav-link {
  color: white;
}
</style>