<template>
  <div class="translation-editor">
    <div class="translation-editor__header">

      <!-- Buttons for languages -->
      <el-button
        v-for="lang in languageList"
        :type="lang === currentLanguage ? 'primary' : 'default'"
        :key="lang.code"
        @click="selectLanguage(lang)"
        :title="lang.name"
      >{{ lang.code }}</el-button>

      <!-- Add translation -->
      <el-button
        :disabled="!currentLanguage"
        class="translation-editor__add-translation"
        type="primary"
        icon="el-icon-edit"
        @click="newTranslationDialogVisible = true"
      >Новый перевод</el-button>

    </div>

    <!-- Translation list -->
    <div class="translation-editor__content">
      <el-table
        v-loading="translations === null"
        :data="translations"
        style="width: 100%">
        <el-table-column
          prop="id"
          label="Id"
          width="40">
        </el-table-column>
        <el-table-column
          prop="name"
          label="Name"
          width="220">
        </el-table-column>
        <el-table-column label="Snippet">
          <template slot-scope="{ row }">
            <el-input
              type="textarea"
              :rows="2"
              placeholder="Введите"
              @change="updateTranslation(row)"
              v-model="row.snippet">
            </el-input>
          </template>
        </el-table-column>
        <el-table-column label="Created" width="140">
          <template slot-scope="{ row }">
            {{ row.created | date }}
          </template>
        </el-table-column>
        <el-table-column label="Updated" width="140">
          <template slot-scope="{ row }">
            {{ row.updated | date }}
          </template>
        </el-table-column>
        <el-table-column label="" width="100">
          <template slot-scope="{ row }">
            <el-button
              @click="deleteTranslation(row)"
              icon="el-icon-delete"
              circle
            ></el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>

    <!-- Create new translation -->
    <el-dialog
      title="Новый перевод"
      :visible.sync="newTranslationDialogVisible"
      width="30%">
      <div class="mb10">
        <el-input v-focus placeholder="name" v-model="newTranslation.name"></el-input>
      </div>
      <div>
        <el-input placeholder="snippet" v-model="newTranslation.snippet"></el-input>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button @click="cancelNewTranslation()">Отмена</el-button>
        <el-button type="primary" @click="postNewTranslation()">Создать</el-button>
      </span>
    </el-dialog>

  </div>
</template>

<script>
import languagesDataprovider from '../dataproviders/languages.dp';
import translationsDataprovider from '../dataproviders/translations.dp';
import dateFilter from '../filters/date.filter';
import focusDirective from '../directives/focus.directive';

const getNewTranslationDataModel = () => ({ name: null, snippet: null });

export default {
  name: 'TranslationsEditor',
  filters: {
    date: dateFilter,
  },
  directives: {
    focus: focusDirective,
  },
  data() {
    return {
      // List of available languages
      languageList: [],
      // Translations for current selected language
      translations: null,
      // Current selected language. First in the list of languages by default
      currentLanguage: null,
      newTranslationDialogVisible: false,
      newTranslation: getNewTranslationDataModel(),
    };
  },
  mounted() {
    this.loadLanguages()
      .then(this.setFirstLanguageAsCurrent)
      .then(this.loadTranslations)
      .catch(() => this.$notify.error({
        title: 'Ошибка',
        message: 'Не удалось загрузить данные',
      }));
  },
  methods: {
    selectLanguage(lang) {
      this.currentLanguage = lang;
      this.translations = null;
      this.loadTranslations(this.currentLanguage);
    },
    loadLanguages() {
      return languagesDataprovider.getLanguages().then((data) => {
        this.languageList = data;
        return data;
      });
    },
    setFirstLanguageAsCurrent(languages) {
      this.currentLanguage = languages[0];
      return this.currentLanguage;
    },
    loadTranslations(lang) {
      return translationsDataprovider.getTranslations(lang.code)
        .then(({ data }) => {
          this.translations = data;
        });
    },
    deleteTranslation(translation) {
      return this.$confirm('Это удалит переводы на всех языках. Продолжить?', 'Удаление перевода', {
        confirmButtonText: 'Удалить',
        cancelButtonText: 'Отмена',
        type: 'warning',
      }).then(() =>
        translationsDataprovider.deleteTranslation(translation.id)
          .then(() => {
            this.translations.splice(this.translations.indexOf(translation), 1);
          }),
      ).catch(() => {
        // Удаление отменено
      });
    },
    updateTranslation(translation) {
      return translationsDataprovider
        .updateTranslation(this.currentLanguage.code, translation);
    },
    cancelNewTranslation() {
      this.newTranslation = getNewTranslationDataModel();
      this.newTranslationDialogVisible = false;
    },
    postNewTranslation() {
      translationsDataprovider
        .createTranslation(this.currentLanguage.code, this.newTranslation)
        .then(({ data }) => {
          this.translations.push(data);
          this.newTranslation = getNewTranslationDataModel();
          this.newTranslationDialogVisible = false;
        });
    },
  },
};
</script>

<style>
.translation-editor {
  max-width: 1200px;
  margin: 0 auto;
}
.translation-editor__header {
  display: flex;
}
.translation-editor__content {
  text-align: left;
  margin-top: 40px;
}
.el-button.translation-editor__add-translation {
  margin-left: auto;
}
</style>
