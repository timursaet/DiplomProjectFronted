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
          <!--v-toolbar-title
        style="width: 300px"
        class="ml-0 pl-4"
      >
        <span class="hidden-sm-and-down">{{chekedStatus}}</span>
      </v-toolbar-title-->
      <v-spacer />
      {{messagePerson.data[0].name}}. Статус - {{status}}
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
    <!-- -->
    <!-- <h1>Отправить сообщение</h1> -->
     <v-form>
    <v-container>
        <v-card max-width="300">
    <v-toolbar color="deep-purple accent-4" dark>
      <v-app-bar-nav-icon></v-app-bar-nav-icon>
      <v-toolbar-title>Пользователи</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>
    </v-toolbar>
    <v-list subheader>
      <v-subheader>Выбирите пользователя</v-subheader>
      <v-list-item
        v-for="item in dataPerson.data"
        :key="item.title"
        @click="sendMessagePerson(item)"
      >
        <v-list-item-avatar>
          <v-img :src="item.avatar"></v-img>
        </v-list-item-avatar>

        <v-list-item-content>
          <v-list-item-title v-text="item.name"></v-list-item-title>
        </v-list-item-content>

        <v-list-item-icon>
          <v-icon :color="item.active ? 'deep-purple accent-4' : 'grey'">mdi-chat</v-icon>
        </v-list-item-icon>
      </v-list-item>
    </v-list>

    <v-divider></v-divider>
  </v-card>
  <v-col cols="12" sm="6" align-self="center">
        <v-textarea
      label="Мои сообщения"
      no-resize
      rows="4"
      :value="myMessage || messagePerson.data[0].messengerMessage"
      readonly
    ></v-textarea> </v-col>
       <v-btn
            text
            color="primary"
            @click="clearMyMessage(messagePerson.data[0]._id)"
          >Очистить диалог</v-btn>
      <!-- <v-row>
        <v-col cols="12" sm="6">
          <v-text-field
            v-model="myMessage"
            label="Мои сообщения"
            outlined
            shaped
          ></v-text-field>
        </v-col>
      </v-row> -->
       <v-row>
        <v-col cols="6">
          <v-text-field
            v-model="message"
            :append-icon="marker ? 'mdi-map-marker' : 'mdi-map-marker-off'"
            :append-outer-icon="message ? 'mdi-send' : 'mdi-microphone'"
            :prepend-icon="icon"
            filled
            clear-icon="mdi-close-circle"
            clearable
            label="Написать сообщение"
            type="text"
            @click:append="toggleMarker"
            @click:append-outer="sendMessage"
            @click:prepend="changeIcon"
            @click:clear="clearMessage"
          ></v-text-field>
        </v-col>
      </v-row>
    </v-container>
  </v-form>
    <!-- -->
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
  import VueSocketIOExt from 'vue-socket.io-extended';
  import io from 'socket.io-client';
  export default {
    props: {
      source: String,
    },
    data: () => ({
      dialog: false,
      drawer: null,
      password: 'Password',
      show: false,
      myMessage: '',
      message: '',
      marker: true,
      iconIndex: 0,
      icons: [
        'mdi-emoticon',
        'mdi-emoticon-cool',
        'mdi-emoticon-dead',
        'mdi-emoticon-excited',
        'mdi-emoticon-happy',
        'mdi-emoticon-neutral',
        'mdi-emoticon-sad',
        'mdi-emoticon-tongue',
      ],
      dataPerson: {},
      id: '',
      messagePerson: {},
      dataNewPerson: {
        login: "",
        password: "",
        name: "",
        lastname: "",
        email: "",
        company: "",
        phone: "",
        age: "",
        status: ""
      },
      items: [
        { icon: 'mdi-home', text: 'Главная', to: '/employee/admin' },
        { icon: 'mdi-pen', text: 'Редактировать профиль', to: '/employee/edit' },
        { icon: 'mdi-content-copy', text: 'Задачи', to: '/employee/task' },
        { icon: 'mdi-message', text: 'Открыть мессенджер', to: '/employee/messenger'},
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
    }),
     computed: {
      icon () {
        return this.icons[this.iconIndex]
      },
      status: function() {
        if(this.messagePerson.data[0].status == "employee")
          return "Соотрудник"
    },
    },
    methods: {
      exit() {
        this.$router.push('/login');
      },
      sendMessagePerson(item) {
        this.id = item._id;
      },
      toggleMarker () {
        this.marker = !this.marker
      },
      clearMessage () {
        this.message = ''
      },
      sendMessage () {
        this.resetIcon();
        this.myMessage+ this.message
        io('http://localhost:3000').emit('send mess', {message: this.message, id: this.id});
        this.clearMessage()
      },
      resetIcon () {
        this.iconIndex = 0
      },
      clearMyMessage(id) {
        let idPerson = id;
        this.myMessage = '';
        this.$http.post('http://localhost:3000/editMssengerMessage', {
                    id: idPerson
                })  
      },
      changeIcon () {
        this.iconIndex === this.icons.length - 1
          ? this.iconIndex = 0
          : this.iconIndex++
      },
    },
    mounted() {
        this.$http.get('http://localhost:3000/employee')
                      .then(response => {
                        this.dataPerson = response.data
                      })
                      .catch(function (error) {
                          console.error(error);
                      });

        this.$http.get('http://localhost:3000/admin', {
                      headers: {
                          'Authorization': 'Bearer '+localStorage.getItem('token')
                      }
                  })
                      .then(response => {
                        this.messagePerson = response.data
                        //this.dataPerson = response.data
                      })
                      .catch(function (error) {
                          console.error(error);
                      })

      const socket = io('http://localhost:3000').connect;
      io('http://localhost:3000').on('add mess', (data) => {
        this.myMessage = this.myMessage + '\n' + data.msg;
      })

    },
  }
</script>