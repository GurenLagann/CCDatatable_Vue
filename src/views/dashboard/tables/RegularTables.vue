<template>
  <v-container
    id="regular-tables"
    fluid
    tag="section"
  >
    <base-v-component
      heading="Simple Tables"
      link="components/simple-tables"
    />
    <v-card>
      <v-card-title>
        Campanhas
        <v-spacer />
        <v-text-field
          v-model="search"
          append-icon="mdi-magnify"
          label="Pesquisa"
          single-line
          hide-details
        />
      </v-card-title>
      <v-data-table
        :headers="headers"
        :items="campanhas"
        :search="search"
      />
    </v-card>
    <v-card>
      <v-card-title>
        Oportunidades
        <v-spacer />
        <v-text-field
          v-model="search"
          append-icon="mdi-magnify"
          label="Pesquisa"
          single-line
          hide-details
        />
      </v-card-title>
      <v-data-table
        :headers="headers"
        :items="campanhas"
        :search="search"
      />
    </v-card>
  </v-container>
</template>

<script>
  import axios from 'axios'
  export default {
    data () {
      return {
        search: '',
        headers: [
          { text: 'Id', sortable: true, value: 'id' },
          { text: 'Campanhas', align: 'start', sortable: false, value: 'nomeCampanha' },
          { text: 'Cliente', value: 'name' },
          { text: 'Perfil', value: 'xp' },
          { text: 'Assessor', value: 'aai' },
          { text: 'Elegivel', value: 'elegivel' },
          { text: 'Valor', value: 'value' },
          { text: 'Fomento', value: 'fomento' },
          { text: 'Fomento Realizado', value: 'fomentoRealizado' },
          { text: 'Operação Realizada', value: 'operacaoRealizada' },
          { text: 'Permissão Recebida', value: 'permissaoRecebida' },
          { text: 'Ordem Executada', value: 'ordem' },
        ],
        campanhas: '',
      }
    },
    mounted () {
      axios
        .get('https://jsonplaceholder.typicode.com/posts').then(response => (this.campanhas = response))
    },
  }
</script>
