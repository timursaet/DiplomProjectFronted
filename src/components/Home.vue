<template>
  <v-container>
      <v-app light>
    <!-- <v-toolbar color="white">
      <v-toolbar-title v-text="title"></v-toolbar-title>
    </v-toolbar> -->
    <v-content>
      <section>
        <v-parallax src="../assets/hero.jpeg" height="600">
          <v-layout
            column
            align-center
            justify-center
            class="white--text"
          >
            <!-- <img src="../assets/doc.jpeg" alt="Vuetify.js" height="200"> -->
            <h1 class="white--text mb-2 display-1 text-center">
              Автоматизация коммуникации и документооборота на предприятии
            </h1>
            <div class="subheading mb-4 text-center">Дипломная работа</div>
            <v-btn
              class="mt-12"
              color="blue lighten-2"
              dark
              large
              to='/login'
            >
             ВОЙТИ
            </v-btn>
          </v-layout>
        </v-parallax>
      </section>

      <section>
        <v-layout
          column
          wrap
          class="my-12"
          align-center
        >
          <v-flex xs12 sm4 class="my-4">
            <div class="text-center">
              <h2 class="headline">Система электронного документооборота</h2>
              <span class="subheading">
                Описание разработки приложения
              </span>
            </div>
          </v-flex>
          <v-flex xs12>
            <v-container grid-list-xl>
              <v-layout row wrap align-center>
                <v-flex xs12 md4>
                  <v-card flat class="transparent">
                    <v-card-text class="text-center">
                      <v-icon x-large class="blue--text text--lighten-2">mdi-palette</v-icon>
                    </v-card-text>
                    <v-card-title primary-title class="layout justify-center">
                      <div class="headline text-center">Описание работы</div>
                    </v-card-title>
                    <v-card-text>
                      Есть 2 типа пользователей : менеджер и работник. 
                  У всех есть свои редактируемые профили. Есть мессенджер с возможностью 
                  создания как обычных так и групповых диалогов. У каждого пользователя 
                  есть своя "файловая система".
                   </v-card-text>
                  </v-card>
                </v-flex>
                <v-flex xs12 md4>
                  <v-card flat class="transparent">
                    <v-card-text class="text-center">
                      <v-icon x-large class="blue--text text--lighten-2">mdi-flash</v-icon>
                    </v-card-text>
                    <v-card-title primary-title class="layout justify-center">
                      <div class="headline">Технологии</div>
                    </v-card-title>
                    <v-card-text>
                      На frontend-части приложении: Vue.js<br>
                      На backend-части приложении: Node.js<br>
                      База данных: MongoBD<br>
                      Мессенджер: Socket.io
                    </v-card-text>
                  </v-card>
                </v-flex>
                <v-flex xs12 md4>
                  <v-card flat class="transparent">
                    <v-card-text class="text-center">
                      <v-icon x-large class="blue--text text--lighten-2">mdi-wrench</v-icon>
                    </v-card-text>
                    <v-card-title primary-title class="layout justify-center">
                      <div class="headline text-center">REST API архитектура</div>
                    </v-card-title>
                    <v-card-text>
                     Авторизация и регистрация на backend-части реализована через JSON Web Token.
                    </v-card-text>
                  </v-card>
                </v-flex>
              </v-layout>
            </v-container>
          </v-flex>
        </v-layout>
      </section>

      <section>
        <v-parallax src="../assets/section.jpg" height="380">
          <v-layout column align-center justify-center>
            <div class="headline white--text mb-4 text-center">Лучшее предложение организациям</div>
            <em>Твой день начинается с систомой электронного документооборота</em>
            <v-btn
              class="mt-12"
              color="blue lighten-2"
              dark
              large
              to='/login'
            >
              ВОЙТИ
            </v-btn>
          </v-layout>
        </v-parallax>
      </section>

      <section>
        <v-container grid-list-xl>
          <v-layout row wrap justify-center class="my-12">
            <v-flex xs12 sm4>
              <v-card flat class="transparent">
                <v-card-title primary-title class="layout justify-center">
                  <div class="headline">Об авторе</div>
                </v-card-title>
                <v-card-text>
                  Работа направлена на написание дипломной работы в Башкирском государственном университете
                </v-card-text>
              </v-card>
            </v-flex>
            <v-flex xs12 sm4 offset-sm1>
              <v-card flat class="transparent">
                <v-card-title primary-title class="layout justify-center">
                  <div class="headline">Мои контакты</div>
                </v-card-title>
                <v-card-text>
                 Контактные данные администратора
                </v-card-text>
                <v-list class="transparent">
                  <v-list-item>
                    <v-list-item-action>
                      <v-icon class="blue--text text--lighten-2">mdi-phone</v-icon>
                    </v-list-item-action>
                    <v-list-item-content>
                      <v-list-item-title>8-937-158-05-08</v-list-item-title>
                    </v-list-item-content>
                  </v-list-item>
                  <v-list-item>
                    <v-list-item-action>
                      <v-icon class="blue--text text--lighten-2">mdi-map-marker</v-icon>
                    </v-list-item-action>
                    <v-list-item-content>
                      <v-list-item-title>Уфа, РБ</v-list-item-title>
                    </v-list-item-content>
                  </v-list-item>
                  <v-list-item>
                    <v-list-item-action>
                      <v-icon class="blue--text text--lighten-2">mdi-email</v-icon>
                    </v-list-item-action>
                    <v-list-item-content>
                      <v-list-item-title>s.timursaet@yandex.ru</v-list-item-title>
                    </v-list-item-content>
                  </v-list-item>
                </v-list>
              </v-card>
            </v-flex>
          </v-layout>
        </v-container>
      </section>

      <v-footer color="blue darken-2">
        <v-layout row wrap align-center>
          <v-flex xs12>
            <div class="white--text ml-4">
              &copy Все авторские права защищены - 2020
            </div>
          </v-flex>
        </v-layout>
      </v-footer>
    </v-content>
  </v-app>
  </v-container>
</template>

<script>
  export default {
    name: 'Home',
    data: () => {
      return {
        title: 'Your Logo'
      }
    }
  }
</script>
