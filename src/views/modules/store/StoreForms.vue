<template>
  <v-card>
    <v-card-title>
      <span class="text-h5"> {{ status }} Store</span>
    </v-card-title>
    <v-card-text>
      <v-container>
        <v-row>
          <v-text-field
            v-model="selected.name"
            label="Store Name"
            counter="255"
          />
        </v-row>
        <v-row>
          <v-col>
            <v-text-field
              v-model="selected.phone"
              label="Contact Number"
              counter="16"
            />
          </v-col>
        </v-row>
        <!-- <v-row>
          <v-col>
            <v-combobox
              v-model="searchKodeposText"
              :items="listKodePos"
              label="Kodepos Searching"
              placeholder="Kelurahan/ Kecamatan/ Kabupaten/ Provinsi"
              @input="selectKodepos"
              @keyup.enter="searchKodepos"
            />
          </v-col>
          <v-col>
            <v-text-field
              v-model="kodepos"
              disabled="true"
              label="Kodepos"
            />
          </v-col>
        </v-row> -->
        <v-row>
          <v-textarea
            v-model="selected.address"
            label="Address Description"
            placeholder="Nomor, Nama jalan, RT/RW, Dukuh, Desa"
            auto-grow
            rows="1"
            counter="255"
          />
        </v-row>
        <!-- <v-row>
          <h2>Lokasi Toko</h2>
        </v-row>
        <v-row class="pa-3">
          <label>
            <gmap-autocomplete
              style="width: 300px; border-bottom-style: solid; border-color: black; border-width: 1px; margin-right: 10px; font-size: 16px; color: black;"
              placeholder="Masukan pencarian lokasi"
              :value="selectedPlace"
              @place_changed="setPlace"
            />
            <v-btn
              small
              color="primary"
              @click="addMarker"
            >
              Tandai Lokasi
            </v-btn>
          </label>
        </v-row> -->
        <!-- <v-row>
          <gmap-map
            :center="center"
            :zoom="12"
            style="width:100%;  height: 400px;"
          >
            <gmap-marker
              v-for="(m, index) in markers"
              :key="index"
              :position="m.position"
              @click="center = m.position"
            />
          </gmap-map>
        </v-row> -->
      </v-container>
    </v-card-text>

    <v-card-actions>
      <v-spacer />
      <v-btn
        color="textGrey"
        text
        @click="close"
      >
        Cancel
      </v-btn>
      <v-btn
        color="accent"
        text
        @click="save"
      >
        Save
      </v-btn>
    </v-card-actions>
  </v-card>
</template>
<script>
  import { sync } from 'vuex-pathify'
  export default {
    name: 'StoreTables',

    components: {},

    props: {
      close: {
        type: Function,
        required: true,
      },
      save: {
        type: Function,
        require: true,
      },
    },

    data: () => ({}),

    computed: {
      status () {
        if (this.selected.id === -1) {
          return 'Add'
        } else {
          return 'Update'
        }
      },
      ...sync('store', ['selected']),
    },

    created () {},

    methods: {},
  }
</script>
