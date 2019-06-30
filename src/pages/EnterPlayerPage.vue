<template>
  <div>
    <div class="col-md-12 text-center">
      <img class="logo" src="../assets/logo-full.png">
      <div class="my-3">
        <span class="msg">{{msg}}</span>
      </div>
    </div>
    <div class="row">
      <div class="col-md-8 offset-md-2 col-sm-12 form-group">
        <label for="player1-name" class="control-label">
          Player1(<span class="symbol">x</span>) Name:
        </label>
        <input
          class="form-control"
          id="player1-name"
          v-model="player1"
          placeholder="Please input name">
      </div>
      <div class="col-md-8 offset-md-2 col-sm-12 form-group">
        <label for="player2-name" class="control-label">
          Player2(<span class="symbol">o</span>) Name:
        </label>
        <input
          class="form-control"
          id="player2-name"
          v-model="player2"
          placeholder="Please input name">
      </div>
      <div class="col-md-8 offset-md-2 mt-5">
        <b-button variant="success" class="w-100" @click="onStart">Start Game</b-button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'enter-player-names',
  data() {
    return {
      msg: 'Enter Player Names',
      player1: '',
      player2: '',
    };
  },
  methods: {
    ...mapActions('players', ['setPlayers']),
    onStart() {
      const { player1, player2 } = this;
      if (player1 === '' || player2 === '') {
        this.$bvToast.toast('Please input player name to start!', {
          variant: 'danger',
          autoHideDelay: 500,
          noCloseButton: true,
        });
        return;
      }
      this.setPlayers({ player1, player2 });
      this.$router.push({ name: 'game' });
    },
  },
};
</script>

<style scoped>
@media (max-width: 376px) {
  .logo {
    width: 90vw
  }
}

.msg {
  font-weight: normal;
  font-size: 26px;
}

.symbol {
  font-weight: normal;
  font-size: 26px;
}

.field {
  margin-top: 3px;
}

.start {
  margin-top: 30px;
  width: 260px;
}

</style>
