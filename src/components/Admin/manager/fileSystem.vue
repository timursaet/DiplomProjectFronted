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
    <template>
      <h1 align='center'>Файловая система компании</h1>
  <v-simple-table dense>
    <template v-slot:default>
      <thead>
        <tr>
          <th class="text-left">Название файла</th>
          <th class="text-left">Переименовать файл</th>
          <th class="text-left">Действии с файлом</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in fileSystem.data" :key="item.name">
          <td>{{ item }} <v-icon @click="viewFiles(item)">mdi-note</v-icon></td>
          <td>
            <input v-model="newFileName" style="border:1px solid blue">
            <v-icon @click="renameFile(item)">mdi-pen</v-icon>
          </td>
          <td>
            <v-icon @click="downloadFiles(item)">mdi-download</v-icon>
            <v-icon @click="deleteFiles(item)">mdi-delete</v-icon>
          </td>
        </tr>
      </tbody>
    </template>
  </v-simple-table>
    </template>
        <v-content>
            <v-row justify="left">
    <v-btn
      color="primary"
      dark
      @click="dialog = true"
    >
      Загрузить файл
    </v-btn>
      <v-dialog
      v-model="dialog"
      max-width="290"
    >
      <v-card>
        <v-card-title class="headline">Загрузить файл</v-card-title>
        <v-card-text>
          Здесь можете загрузить в файловую систему компании
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-form id="formElem" action="/upload" method="post" enctype="multipart/form-data">
                Загрузить файл<br>
                <input type="file" name="filedata"><br><br>
                <v-btn @click="submitFile()">Отправить</v-btn>
            </v-form> 
        </v-card-actions>
      </v-card>
    </v-dialog>
            </v-row>
 <!-- <v-form id="formElem" action="/upload" method="post" enctype="multipart/form-data">
                Загрузить файл<br>
                <input type="file" name="filedata"><br><br>
                <v-btn @click="submitFile()">Отправить</v-btn>
            </v-form> -->
                  <!-- <v-toolbar-title>Файловая система компании</v-toolbar-title><br>
         <ul>
          <li v-for="item in fileSystem.data" style="list-style-type: none">
            <v-icon>mdi-file</v-icon>
            {{item}}
          <v-icon @click="downloadFiles(item)">mdi-download</v-icon>
          <v-icon>mdi-pen</v-icon>
          <v-icon @click="deleteFiles(item)">mdi-delete</v-icon>
          </li>
        </ul><br>
            <v-form id="formElem" action="/upload" method="post" enctype="multipart/form-data">
                Загрузить файл<br>
                <input type="file" name="filedata"><br><br>
                <v-btn @click="submitFile()">Отправить</v-btn>
            </v-form>
             -->
      <v-container>
      </v-container>
    </v-content>
    <!-- <v-btn
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
    </v-dialog> -->
  </v-app>
</template>
<script>

  export default {
    props: {
      source: String,
    },
    data: () => ({
      dialog: false,
      drawer: null,
      dataPerson: {},
      newFileName: '',
      fileSystem: {},
      viewFiless: '',
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
        { icon: 'mdi-home', text: 'Главная', to: '/manager/admin' },
        { icon: 'mdi-pen', text: 'Редактировать профиль', to: '/manager/edit' },
        { icon: 'mdi-account-circle', text: 'Сотрудники компании', to: '/manager/employee'},
        { icon: 'mdi-content-copy', text: 'Задачи', to: '/manager/task' },
        { icon: 'mdi-message', text: 'Открыть мессенджер', to: '/manager/messenger'},
        { icon: 'mdi-cellphone-link', text: 'Файловая система', to: '/manager/fileSystem' },
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
        { icon: 'mdi-keyboard', text: 'Go to the old version' },
      ],
    }),
    computed: {
      status: function() {
        if(this.dataPerson.data[0].status == "manager")
          return "Менеджер"
      }
    },
    methods: {
      exit() {
        this.$router.push('/login');
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
      }, 
        submitFile() {
               let response = fetch('http://localhost:3000/upload', {
                    method: 'POST',
                    body: new FormData(formElem)
                });
        },
        downloadFiles(item) {
                this.$http.get('http://localhost:3000/uploads/'+item)
                    .then(response => { 
                      document.location.href = response.config.url;
                    })
        },
        deleteFiles(item) {
                 this.$http.post('http://localhost:3000/deleteFiles/', {
                    delete: item
                 })
        },
        renameFile(item) {
                 this.$http.post('http://localhost:3000/renameFiles/', {
                    originalNameFiles: item,
                    newFileName: this.newFileName
                 })
        },
        viewFiles(item) {
                 this.$http.get('http://localhost:3000/viewFiles/'+item)
                    .then(response => {
                        this.viewFiless = response.data
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
                    }),
                this.$http.get('http://localhost:3000/downloadFiles')
                    .then(response => {
                       this.fileSystem = response.data;
                    })
        },
    }
  </script> 