<template>
  <div class="translation-editor">
    <div class="translation-editor__header">
      <el-button
        v-for="lang in languageList"
        :type="lang === currentLanguage ? 'success' : 'default'"
        :key="lang.code"
        @click="selectLanguage(lang)"
        :title="lang.name"
      >{{ lang.code }}</el-button>
      <el-button
        :disabled="!currentLanguage"
        class="translation-editor__add-translation"
        type="success"
        icon="el-icon-edit"
      >Новый перевод</el-button>
    </div>
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
  </div>
</template>

<script>
import languagesDataprovider from '../dataproviders/languages.dp';
import translationsDataprovider from '../dataproviders/translations.dp';
import dateFilter from '../filters/date.filter';

export default {
  name: 'TranslationsEditor',
  filters: {
    date: dateFilter,
  },
  data() {
    return {
      // List of available languages
      languageList: [],
      // Translations for current selected language
      translations: null,
      // Current selected language. First in the list of languages by default
      currentLanguage: null,
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
      return languagesDataprovider.getLanguages().then(({ data }) => {
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
      this.$notify.info({
        title: 'Удаление',
        message: JSON.stringify(translation),
      });
    },
    updateTranslation(translation) {
      this.$notify.info({
        title: 'Редактирование',
        message: translation.snippet,
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
