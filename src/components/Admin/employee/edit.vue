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
      <v-btn icon>
        <v-icon>mdi-apps</v-icon>
      </v-btn>
      <v-btn icon>
        <v-icon>mdi-bell</v-icon>
      </v-btn>
            <v-btn color="error" fab x-small dark to="/">
              <v-icon>mdi-account-circle</v-icon>
            </v-btn>
    </v-app-bar>
     <v-row align="center" justify="center">
      <v-col cols="12" sm="8" md="10">
          <v-card class="elevation-12">
                    <v-toolbar color="red" dark flat >
                        <v-toolbar-title>Редактировать профиль</v-toolbar-title>
                        <div class="flex-grow-1"></div>
                    </v-toolbar>
                    <v-card-text>
                        <v-form>
                            <v-text-field label="Имя" name="name" type="text" v-model="dataPerson.data[0].name"></v-text-field>
                            <v-text-field label="Фамилия" name="lastname" type="text" v-model="dataPerson.data[0].lastname"></v-text-field>
                            <v-text-field label="Возраст" name="age" type="text" v-model="dataPerson.data[0].age"></v-text-field>
                            <v-text-field label="Электронная почта" name="email" type="text" v-model="dataPerson.data[0].email"></v-text-field>
                            <v-text-field label="Организация" name="company" type="text" v-model="dataPerson.data[0].company"></v-text-field>
                            <v-text-field label="Номер телефона" name="phone" type="text" v-model="dataPerson.data[0].phone"></v-text-field>
                        </v-form>
                    </v-card-text>
                    <v-card-actions>
                        <div class="flex-grow-1"></div>
                        <v-btn color="red" @click="save()">Сохранить изменения</v-btn>
                    </v-card-actions>
            </v-card>
        </v-col>
      </v-row>
    <v-content>
      <v-container>
      </v-container>
    </v-content>
    <!--v-btn
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
          Create contact
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
                <v-text-field
                  placeholder="Name"
                />
              </v-row>
            </v-col>
            <v-col cols="6">
              <v-text-field
                prepend-icon="mdi-account-card-details-outline"
                placeholder="Company"
              />
            </v-col>
            <v-col cols="6">
              <v-text-field
                placeholder="Job title"
              />
            </v-col>
            <v-col cols="12">
              <v-text-field
                prepend-icon="mdi-mail"
                placeholder="Email"
              />
            </v-col>
            <v-col cols="12">
              <v-text-field
                type="tel"
                prepend-icon="mdi-phone"
                placeholder="(000) 000 - 0000"
              />
            </v-col>
            <v-col cols="12">
              <v-text-field
                prepend-icon="mdi-text"
                placeholder="Notes"
              />
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
          >Cancel</v-btn>
          <v-btn
            text
            @click="dialog = false"
          >Save</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog-->
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
      // dataEdition: {
      //   name: dataPerson.data[0].name
      // },
      items: [
        { icon: 'mdi-home', text: 'Главная', to: '/employee/admin' },
        { icon: 'mdi-pen', text: 'Редактировать профиль', to: '/employee/edit' },
        { icon: 'mdi-content-copy', text: 'Задачи', to: '/employee/task'},
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
    methods: {
      save() {
            this.$http.post('http://localhost:3000/edit', {
                    id: this.dataPerson.data[0]._id,
                    username: this.dataPerson.data[0].name,
                    lastname: this.dataPerson.data[0].lastname,
                    age: this.dataPerson.data[0].age,
                    email: this.dataPerson.data[0].email,
                    company: this.dataPerson.data[0].company,
                    phone: this.dataPerson.data[0].phone

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
                      console.log(response.data)
                       this.dataPerson = response.data
                    })
                    .catch(function (error) {
                        console.error(error);
                    })
        }
  }
</script>