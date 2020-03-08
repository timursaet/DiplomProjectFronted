<template>
  <v-app id="inspire">
    <v-navigation-drawer
      v-model="drawer"
      :clipped="$vuetify.breakpoint.lgAndUp"
      app
    >
      <v-list dense>
        <template v-for="item in items">
          <v-row
            v-if="item.heading"
            :key="item.heading"
            align="center"
          >
            <v-col cols="6">
              <v-subheader v-if="item.heading">
                {{ item.heading }}
              </v-subheader>
            </v-col>
            <v-col
              cols="6"
              class="text-center"
            >
              <a
                href="#!"
                class="body-2 black--text"
              >EDIT</a>
            </v-col>
          </v-row>
          <v-list-group
            v-else-if="item.children"
            :key="item.text"
            v-model="item.model"
            :prepend-icon="item.model ? item.icon : item['icon-alt']"
            append-icon=""
          >
            <template v-slot:activator>
              <v-list-item-content>
                <v-list-item-title>
                  {{ item.text }}
                </v-list-item-title>
              </v-list-item-content>
            </template>
            <v-list-item
              v-for="(child, i) in item.children"
              :key="i"
              link
            >
              <v-list-item-action v-if="child.icon">
                <v-icon>{{ child.icon }}</v-icon>
              </v-list-item-action>
              <v-list-item-content>
                <v-list-item-title>
                  {{ child.text }}
                </v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list-group>
          <v-list-item
            v-else
            :key="item.text"
            link
            :to="item.to"
          >
            <v-list-item-action>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>
                {{ item.text }}
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </template>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar
      :clipped-left="$vuetify.breakpoint.lgAndUp"
      app
      color="blue darken-3"
      dark
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-toolbar-title
        style="width: 300px"
        class="ml-0 pl-4"
      >
        <span class="hidden-sm-and-down">Панель администратора</span>
      </v-toolbar-title>
      <v-text-field
        flat
        solo-inverted
        hide-details
        prepend-inner-icon="mdi-magnify"
        label="Search"
        class="hidden-sm-and-down"
      />
      <v-spacer />
      {{dataPerson.data[0].name}}. Статус - {{status}}
      <v-btn icon>
        <v-icon>mdi-apps</v-icon>
      </v-btn>
      <v-btn icon>
        <v-icon>mdi-bell</v-icon>
      </v-btn>
            <v-btn color="error" fab x-small dark @click="exit()">
              <v-icon>mdi-account-circle</v-icon>
            </v-btn>
    </v-app-bar>
       <v-row align="center" justify="center">
      <v-col cols="12" sm="8" md="10">
          <v-card class="elevation-12">
                    <v-toolbar color="red" dark flat >
                        <v-toolbar-title>{{dataPerson.data[0].name}}. Статус - {{status}}</v-toolbar-title>
                        <div class="flex-grow-1"></div>
                    </v-toolbar>
                    <v-card-text>
                        <v-form>
                            <v-text-field label="Задачи" name="name" type="text" v-model="dataPerson.data[0].task" readonly></v-text-field>
                        </v-form>
                    </v-card-text>
            </v-card>
        </v-col>
      </v-row>
      <!-- -->
<section aria-labelledby="todos-label">
  <h1>Мои задачи на день</h1>
  <ul>
    <li v-for="(todo, index) in todos">
      <input type="checkbox" :id="`todo-${index}`" v-model="todo.done" class="interface">
      <label :for="`todo-${index}`">
        <span class="tick"></span>
        <span class="text">{{todo.name}}  </span>
       <button @click="remove(index, todo.name)" :aria-label="`delete ${todo.name}`">
        <v-icon>mdi-basket</v-icon>
      </button>
      </label>
    </li>
  </ul>
  <form @submit="addTodo">
    <input type="text" v-model="workingName" placeholder="Введите вашу задачу">
    <button type="submit" :disabled="validity">Сохранить</button>
  </form>
</section>
      <!--  -->
    <v-content>
      <v-container>
      </v-container>
    </v-content>
  <v-btn
      bottom
      color="pink"
      dark
      fab
      fixed
      right
      @click="dialog = !dialog"
    >
      <v-icon>mdi-plus</v-icon>
    </v-btn>
    <v-dialog
      v-model="dialog"
      width="800px"
    >
      <v-card>
        <v-card-title class="grey darken-2">
          Зарегистрировать соотрудника
        </v-card-title>
        <v-container>
          <v-row class="mx-2">
            <v-col
              class="align-center justify-space-between"
              cols="12"
            >
              <v-row
                align="center"
                class="mr-0"
              >
                <v-avatar
                  size="40px"
                  class="mx-3"
                >
                  <img
                    src="//ssl.gstatic.com/s2/oz/images/sge/grey_silhouette.png"
                    alt=""
                  >
                </v-avatar>
                <v-text-field label="Имя" placeholder="Имя" type="text" v-model="dataNewPerson.name"/>
                <v-text-field label="Фамилия" placeholder="Фамилия" type="text" v-model="dataNewPerson.lastname"/>
              </v-row>
            </v-col>
              <v-col cols="6">
             <v-text-field label="Логин соотрудника" placeholder="Логин" type="text" v-model="dataNewPerson.login"/>
            </v-col>
            <v-col cols="6">
              <v-text-field label="Пароль" placeholder="Пароль" type="password" v-model="dataNewPerson.password"/>
            </v-col>
            <v-col cols="6">
            <v-text-field label="Электронная почта" prepend-icon="mdi-email" placeholder="email" type="text" v-model="dataNewPerson.email"/>
            </v-col>
            <v-col cols="6">
              <v-text-field label="Номер телефона" type="tel" prepend-icon="mdi-phone" placeholder="(000) 000 - 0000"/>
            </v-col>
            <v-col cols="6">
              <v-text-field label="Возраст" placeholder="Возрост" v-model="dataNewPerson.age"/>
              <v-text-field label="Статус соотрудника" placeholder="Статус соотрудника" v-model="dataNewPerson.status"/>
              <v-text-field label="Организация" placeholder="Статус соотрудника" v-model="dataNewPerson.company"/>
            </v-col>
          </v-row>
        </v-container>
        <v-card-actions>
          <v-btn
            text
            color="primary"
          >More</v-btn>
          <v-spacer />
          <v-btn
            text
            color="primary"
            @click="dialog = false"
          >Отменить действие</v-btn>
          <v-btn
            text
            @click="add()"
          >Добавить соотрудника</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-app>
</template>

<script>

  export default {
    name: 'app',
    props: {
      source: String,
    },
    data: () => ({
      dialog: false,
      drawer: null,
      dataPerson: {},
      dataPerson: {},
       dataNewPerson: {
        login: "",
        password: "",
        name: "",
        lastname: "",
        email: "",
        company: "",
        phone: "",
        age: "",
        status: "",
      },
      items: [
        { icon: 'mdi-home', text: 'Главная', to: '/manager/admin' },
        { icon: 'mdi-pen', text: 'Редактировать профиль', to: '/manager/edit' },
        { icon: 'mdi-account-circle', text: 'Сотрудники компании', to: '/manager/employee'},
        { icon: 'mdi-content-copy', text: 'Задачи', to: '/manager/task'},
        { icon: 'mdi-message', text: 'Открыть мессенджер', to: '/manager/messenger'},
        {
          icon: 'mdi-chevron-up',
          'icon-alt': 'mdi-chevron-down',
          text: 'Labels',
          model: true,
          children: [
            { icon: 'mdi-plus', text: 'Create label' },
          ],
        },
        {
          icon: 'mdi-chevron-up',
          'icon-alt': 'mdi-chevron-down',
          text: 'More',
          model: false,
          children: [
            { text: 'Import' },
            { text: 'Export' },
            { text: 'Print' },
            { text: 'Undo changes' },
            { text: 'Other contacts' },
          ],
        },
        { icon: 'mdi-settings', text: 'Settings' },
        { icon: 'mdi-help-circle', text: 'Help' },
        { icon: 'mdi-cellphone-link', text: 'App downloads' },
        { icon: 'mdi-keyboard', text: 'Go to the old version' },
      ],
      todos: [
     {
       name: 'Здесь мои задачи на день',
       done: false
     },
    ],
    workingName: '',
    feedback: ''
    }),
    computed: {
      status: function() {
        if(this.dataPerson.data[0].status == "manager")
          return "Менеджер"
      },  
      validity() {
      return this.workingName.trim() === '';
    }
    },
    methods: {
      exit() {
        this.$router.push('/login');
      },
      addTodo(e) {
      e.preventDefault();
      this.todos.push({
        name: this.workingName,
        done: false
      });
      this.feedback = `${this.workingName} added`;
      this.workingName = '';
    },
    remove(index, name) {
      this.todos.splice(index, 1);
      document.getElementById('todos-label').focus();
      this.feedback = `${name} deleted`;
    },
        add() {
        this.$http.post('http://localhost:3000/add', {
                    username: this.dataNewPerson.name,
                    lastname: this.dataNewPerson.lastname,
                    age: this.dataNewPerson.age,
                    email: this.dataNewPerson.email,
                    company: this.dataNewPerson.company,
                    phone: this.dataNewPerson.phone,
                    login: this.dataNewPerson.login,
                    password: this.dataNewPerson.password,
                    status: this.dataNewPerson.status
                })
                    .then(response => {
                        //  this.$router.push('/admin');
                    })
                    .catch(function (error) { 
                        console.error(error);
                        
                    })
      }
    },
    mounted() {
                this.$http.get('http://localhost:3000/admin', {
                    headers: {
                        'Authorization': 'Bearer '+localStorage.getItem('token')
                    }
                })
                    .then(response => {
                       this.dataPerson = response.data
                    })
                    .catch(function (error) {
                        console.error(error);
                    })
        }
  }
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Asap');

* {
  font-size: inherit;
  font-family: inherit;
}

html {
  font-size: calc(1em + 1vw);
  font-family: Asap, sans-serif;
}

body {
  max-width: 20rem;
  margin: 0;
  padding: 1rem;
}

h1 {
  margin-top: 0;
  font-size: 1.25rem;
}

ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

ul:empty, .empty-state {
  display: none;
}

ul:empty + .empty-state {
  display: block;
}

li {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.tick {
  display: inline-block;
  width: 0.66rem;
  height: 0.66rem;
  border: 0.125rem solid;
  margin-right: 0.25rem;
  border-radius: 0.125rem;
}

[type="checkbox"]:checked +  label .tick {
  background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgaGVpZ2h0PSI1MCIgd2lkdGg9IjUwIiB2ZXJzaW9uPSIxLjEiIHhtbG5zOmNjPSJodHRwOi8vY3JlYXRpdmVjb21tb25zLm9yZy9ucyMiIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgdmlld0JveD0iMCAwIDUwLjAwMDAwMSA1MC4wMDAwMDEiPiA8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwIC0xMDAyLjQpIj4gIDxyZWN0IHN0eWxlPSJzdHJva2UtbGluZWpvaW46cm91bmQ7c3Ryb2tlOiMxYTFhMWE7c3Ryb2tlLXdpZHRoOjMuNDQ1MztzdHJva2UtbGluZWNhcDpyb3VuZDtmaWxsOiMxYTFhMWEiIHRyYW5zZm9ybT0ibWF0cml4KC44ODc1OSAuNDYwNjQgLS40NTEyNyAuODkyMzkgMCAwKSIgcnk9IjEuMTUwNCIgaGVpZ2h0PSIzMS42OTEiIHdpZHRoPSI1Ljk5MyIgeT0iODgyLjcxIiB4PSI0ODcuMTkiLz4gIDxyZWN0IHN0eWxlPSJzdHJva2UtbGluZWpvaW46cm91bmQ7c3Ryb2tlOiMxYTFhMWE7c3Ryb2tlLXdpZHRoOjMuMTM5MjtzdHJva2UtbGluZWNhcDpyb3VuZDtmaWxsOiMxYTFhMWEiIHRyYW5zZm9ybT0icm90YXRlKDI3LjA4NSkiIHJ5PSIuOTExNjkiIGhlaWdodD0iNi4yNzgyIiB3aWR0aD0iMTguODM1IiB5PSI5MTEuMjIiIHg9IjQ3OC42MiIvPiA8L2c+PC9zdmc+);
  background-repeat: none;
  background-position: center;
  background-size: 100%;
}

[type="checkbox"]:checked + label .text {
  text-decoration: line-through;
}

li label {
  flex: 2;
}

li + li {
  margin-top: 0.55rem;
}

button {
  margin: 0;
  line-height: 1;
  border: 0;
}

li button {
  border: 0;
  padding: 0;
  background: 0;
}

button svg {
  width: 1.125em;
  height: 1.125em;
}

form {
  margin-top: 1rem;
  display: flex;
}

input, [type="submit"] {
  border: 0.125rem solid;
  border-radius: 0.125rem;
  line-height: 1;
}

[type="text"] {
  flex: 3;
  margin-right: 0.25rem;
}

[type="submit"] {
  background: #000;
  color: #fff;
  padding: 0.25rem 0.5rem;
  border: 2px solid #000;
}

[type="submit"][disabled] {
  opacity: 0.33;
}

::-webkit-input-placeholder { 
  color: #444;
  font-style: italic;
}
::-moz-placeholder { 
  color: #444;
  font-style: italic;
}
:-ms-input-placeholder { 
  color: #444;
  font-style: italic;
}
:-moz-placeholder { 
  color: #444;
  font-style: italic;
}

input:focus, button:focus, [type="checkbox"]:focus + label .tick {
  outline: none;
  box-shadow: 0 0 0 0.125rem #2a7fff;
}

[tabindex="-1"]:focus {
  outline: none;
}

.interface {
  position: absolute !important;
  clip: rect(1px, 1px, 1px, 1px);
  padding:0 !important;
  border:0 !important;
  height: 1px !important;
  width: 1px !important;
  overflow: hidden;
}

.smaller {
  font-size: 0.75rem;
}
</style>