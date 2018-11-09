<template>
  <div >
        <div class="wrap">
      <form class="formClass" @submit.prevent="addSkill">
        <input
          type="text"
          name="inputfield"
          id="inputfield"
          placeholder="add task into list"
          v-model="somevar"
          v-validate="'min:5'"
        >
        <transition
          name="alert-in"
          enter-active-class="animated fadeInDown"
          leave-active-class="animated flipOutX"
        >
          <p class="alert"  v-if="errors.has('inputfield')">{{ errors.first('inputfield') }}</p>
        </transition>
      </form>

      <ul class="todolist">
        <transition-group
          enter-active-class="animated bounceInUp"
          leave-active-class="animated bounceOutDown"
        >
          <li class="todolist__item"
           v-on:click="yepitem($event)"
           v-for="(item, index) in skills" :key="index"
           >
            {{item.skill}}
            <i class="far fa-times-circle" v-on:click="remove(index)"></i>
          </li>
        </transition-group>
      </ul>
      <p>These are the skills that you want to possess</p>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Skills',
  data() {
    return {
      somevar: '',
      skills: [{ skill: 'Vue.js' }, { skill: 'Vueex' }, { skill: 'VeeValidate' }, { skill: 'React.js' }],

    };
  },
  methods: {
    addSkill() {
      this.$validator.validateAll().then((result) => {
        if (result) {
          this.skills.push({ skill: this.somevar });
          this.somevar = '';
        } else {
          console.log('Not valid');
        }
      });
    },
    remove(key) {
      this.skills.splice(key, 1);
    },
    yepitem(evt) {
      if (evt.target.className != 'far fa-times-circle') {
        evt.target.classList.toggle('todolist__item--done');
      }
    },
  },
};
</script>
<style scoped lang="scss">
@import url(https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.7.0/animate.min.css);
@import url(https://use.fontawesome.com/releases/v5.4.2/css/all.css);

.formClass {
  position: relative;
}

#inputfield {
  position: relative;
  z-index: 100;
  width: 100%;
  border: none;
  background-color: #323333;
  color: #687f7f;
  margin: 1rem 0 0.5rem;
  font-size: 2rem;
  padding: 1rem;
}

.todolist {
  list-style: none;

  &__item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 2rem;
    margin-bottom: 0.1rem;
    padding: 0.5rem;
    padding-left: 1.5rem;
    background-color: #e0edf4;
    border-left: 1rem solid #3eb3f6;
    &--done{
      text-decoration: line-through;
    background-color: #777 !important;
    }
  }
  &__item:nth-of-type(odd) {
    background-color: #bbb;
  }
}
.alert {
  position: relative;
  z-index: 50;
  color: #ccc;
  font-size: 1.5rem;
  padding: 0.5rem;
  background-color: rgb(17, 87, 153);
}

i {
  float: right;
}
</style>
