var app = new Vue({
  el: '#app',
  data() {
    return {
      specColor: '',
      currentBg: '',
      SpecAtakActive: true,
      monsterMove: false,
      normalAtackCount: 0,
      compAtackCount: 0,
      player: 'You',
      playerBarWidth: 100,
      playerHelth: 100,
      comp: 'Monster',
      compBarWidth: 100,
      compHelth: 100,
      tab: [{
        txt: 'Start epic battle',
        player: true
      }],
    }
  },
  methods: {
    atak: function () {
      let atakplayer = Math.round(Math.random() * 15);

      if (this.normalAtackCount == 2) {
        this.SpecAtakActive = false;
        this.normalAtackCount = 0;
      };
      if (this.SpecAtakActive) {
        this.normalAtackCount++;
      };

      this.monsterMove = true;
      this.compHelth -= atakplayer;
      this.compBarWidth -= atakplayer;
      this.tab.unshift({
        txt: `You hit: ${atakplayer} hp`,
        player: true
      });
      if (this.playerHelth > 0) {
        this.conterAtak();
      }
      this.gameStatus();
    },
    SpecialAtak: function () {
      let SpAtakplayer = Math.round(Math.random() * 50);
      this.compHelth -= SpAtakplayer;
      this.compBarWidth -= SpAtakplayer;
      this.SpecAtakActive = true;
      this.tab.unshift({
        txt: `You Special hit: ${SpAtakplayer} hp`,
        player: true
      });
      this.conterAtak();
      this.gameStatus();
    },
    health: function () {
      if (this.playerHelth < 100) {
        let healplayer = Math.round(Math.random() * 40);
        if (this.playerHelth + healplayer > 100) {
          this.playerHelth = 100;
          this.playerBarWidth = 100;
        } else {
          this.playerHelth += healplayer;
          this.playerBarWidth += healplayer;
        }
        this.tab.unshift({
          txt: `Player Heal: ${healplayer}hp`,
          player: true
        });
      }
      this.conterAtak();
    },
    reset: function () {
      window.location.reload(false);
    },
    conterAtak() {
      let counter = this;
      setTimeout(function () {
        let atacComp = Math.round(Math.random() * 25);

        if (counter.compAtackCount == 4) {
          counter.compAtackCount++;
          if (counter.compHelth < 100) {
            let healcomp = Math.round(Math.random() * 30);
            if (counter.compHelth + healcomp > 100) {
              counter.compHelth = 100;
              counter.compBarWidth = 100;
            } else {
              counter.compHelth += healcomp;
              counter.compBarWidth += healcomp;
            }
            counter.monsterMove = false;
            counter.tab.unshift({
              txt: `Monster Heal: ${healcomp} hp`,
              player: false
            });
          }
        } else {
          if (counter.compAtackCount == 7) {
            atacComp += 20;
            counter.compAtackCount = 0;
          }
          counter.playerHelth -= atacComp;
          counter.playerBarWidth -= atacComp;
          counter.tab.unshift({
            txt: `Monster Attack: ${atacComp} hp`,
            player: false
          });
          counter.monsterMove = false;
          counter.compAtackCount++;
          counter.gameStatus();
        }
      }, 500);
    },
    gameStatus() {
      if (this.playerHelth <= 0) {
        this.playerHelth = 'You lose';
        this.compHelth = 'You lose';
      }
      if (this.compHelth <= 0) {
        this.playerHelth = 'You win!';
        this.compHelth = 'You win!';
      }
    }
  },
})