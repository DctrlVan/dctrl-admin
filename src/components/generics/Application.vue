<template lang="jade">

.application
	form#form
		label TAKE ACTION
		p Add your name to learn more.
		div
			input(
				type='text',
				placeholder='Your Name',
				name='name',
				v-model='info.name',
		    v-bind:style='nameInputStyle'
			)
		div
			input(
				type='text',
				name='mail',
				placeholder='Your Email',
				v-model='info.mail',
		    v-bind:style='mailInputStyle'
			)
		div
			input(
				type='text',
				placeholder='Postal Code',
				name='postal',
				v-model='info.postal'
		    v-bind:style='postalInputStyle'
			)
		.checkbox-container
			input(type="checkbox", name="subscribe", id="subscribe", v-model='info.subscribe')
			label.checkbox__label(for="subscribe") Yes, I’d like to receive updates
		button.btn.btn--full(v-bind:class='buttonStatus.btnClass', @click.prevent='postInfo') {{buttonStatus.btnMessage}}

</template>

<script>
import request from 'superagent'
import _ from 'lodash'

const invalidStyle = {
  'border-color': '#da0505',
}

const validStyle = {
  'border-color': '',
}

export default {
  data() {
    return {
			info: {
				name: '',
				mail: '',
				postal: '',
				subscribe: true,
				submitAttempted: false,
				success:false,
			},
		}
  },
  props: ['content'],
  methods: {
    postInfo() {
      this.info.submitAttempted = true
      if (this.isValidInfo()) {
        let info = {
					name:this.info.name,
					mail:this.info.mail,
					postal:this.info.postal,
					subscribe:this.info.subscribe,
					success: false,
				}
				console.log(info)
				this.$store.dispatch('TOGGLE_THANKYOU')
				request
          .post('/post')
          .send(info)
          .then(console.log)
          .catch(console.log)
        //reset
				this.info.success = true
				setTimeout(()=> {
					console.log('timeout triggered success back to false', this.$forceUpdate)
					this.info.success = false
				}, 11111)
        this.info.submitAttempted = false
        this.info.name = ''
        this.info.mail = ''
				this.info.postal = ''
				return true
      }
    },
    isValidInfo() {
			this.info.name = this.info.name.replace(/^\s/, '')
			this.info.mail = this.info.mail.replace(/\s/, '')
			this.info.postal = this.info.postal.replace(/\s/, '')
      return (
        this.isValidName() &&
        this.isValidMail()
      )
    },
    isValidName() {
      return this.info.name.length > 3
    },
    isValidMail() {
      let mailRegex = /^\w+\.?\w+?\@\w+\.(\w+\.)?\w+$/
      return mailRegex.test(this.info.mail)
    },
    isValidPostal() {
      let postalRegex = /^[A-Za-z]\d[A-Za-z][ -]?\d[A-Za-z]\d$/
      return postalRegex.test(this.info.postal)
    },
  },
  computed: {
    nameInputStyle() {
      if (this.info.submitAttempted) {
        if (this.isValidName()) {
          return validStyle
        }
        return invalidStyle
      }
    },
    mailInputStyle(){
      if (this.info.submitAttempted) {
        if (this.isValidMail()) {
          return validStyle
        }
        return invalidStyle
      }
    },
    postalInputStyle(){
      if (this.info.submitAttempted) {
        if (this.isValidPostal()) {
          return validStyle
        }
        return invalidStyle
      }
    },
		buttonStatus(){
			if (this.info.submitAttempted && !this.isValidInfo()){
				return {
					btnClass:{
						invalidbtn:true
					},
					btnMessage:"invalid"
				}
			}
			if (this.info.success){
				return {
					btnClass:{
						successBtn:true
					},
					btnMessage:"thank you"
				}
			}
			return {
				btnMessage: 'learn more'
			}
		}
  }
}
</script>

<style lang="stylus" scoped>
  @import "../../styles/main"

  @media (min-width: smBreakpoint) {
    .application {
        width: 50%
    }
  }

  @media (min-width: breakpoint) {
    .application {
        width: 100%;
        margin-top: 3rem;
    }
  }

	.invalidbtn
		background-color:red

	.successbtn
		background-color:green

</style>
