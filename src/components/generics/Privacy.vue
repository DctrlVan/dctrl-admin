<template lang="jade">


Modal(v-bind:visible='visible', v-bind:close='closeModal', v-bind:sm='true')
  h1 Privacy Policy
  p Imagine X is committed to respecting your privacy. The purpose of this Privacy Policy is to explain how we handle personal information to ensure its confidentiality, security and accuracy.
  label WHAT IS “PERSONAL INFORMATION”?
  p “Personal information” is information about an identifiable individual. It includes contact information such as your name, address, phone number and financial information.
  label HOW DO WE OBTAIN YOUR PERSONAL INFORMATION AND WHAT DO WE OBTAIN?
  p We obtain the information that you choose to give us. You may do so in a variety of ways including:
    ul
      li When you visit our website for the purpose of becoming involved with the platform as a volunteer
      li When you subscribe to our communications
      li If you donate or make a contribution to the platform
      li If you register at an event or a community meeting
      li If you complete any other form on the Imagine X website, including online petitions or surveys
  p It is also possible that your information could be provided to us by a volunteer or friend who thinks you would be interested in getting involved with Imagine X.
  p The information that we collect may include:
    ul
      li Contact and identification information, such as your name, address, telephone numbers, e-mail address and social media contacts.
      li Financial information that we need to process donations e.g. payment methods and preferences, billing and banking information (e.g. credit card number and expiry date).
  label HOW DO WE USE AND SHARE PERSONAL INFORMATION?
  p We will not, without your consent, use your personal information for any purpose other than as described in this privacy policy, except where permitted or required by applicable legislation.
  p We also use your personal information to communicate with you about Imagine X and its activities, as well as to provide you with news and information. We use your financial information to process your contributions. If you have been a contributor, we may contact you again to seek your financial support. Under no circumstances, however, do we sell your personal information.
  p We may engage third party providers to perform tasks on our behalf such as processing your donation, making phone calls and providing technical services to our website. When information is shared with third parties for these purposes, we include privacy protective clauses in written contracts to help safeguard personal information.
  label HOW DO WE PROTECT PERSONAL INFORMATION?
  p The security of your personal information is important to us. For information provided online, our website contains security measures in order to protect against the loss, misuse, or alteration of the information under our control.
  label HOW CAN I UPDATE MY INFORMATION OR UNSUBSCRIBE?
  p You may update or correct the information you provide to us by e-mailing us at hello@imaginex.ca. If you have subscribed to receive information, you may unsubscribe by clicking “Unsubscribe” at the bottom of the email message.
  label WHAT ABOUT ANTI-SPAM LEGISLATION?
  p Most of the messages sent by the Imagine X and other political entities are exempt from the application of Canada’s anti-spam law as it relates to commercial electronic messages sent to electronic addresses. This is because: the electronic messages that we send are generally either those soliciting donations, which are specifically exempt under the law, or are messages of an informational, not a commercial, character. If we do send any messages to which the law applies and for which there are no exemptions, we will ensure that we have consent to do so, as required by the law, and that any other legal requirements e.g. an unsubscribe mechanism, are met.
  p As a best practice, we have an unsubscribe mechanism for our electronic messages, even where the law does not require us to do so.
  label DOES IMAGINE X LOG IP ADDRESSES?
  p We log IP addresses, or the location of your computer network on the Internet, for systems administration and troubleshooting purposes. We may also use IP addresses to track which pages people visit in order to improve the quality of our website.
  label DOES IMAGINE X USE COOKIES?
  p Like many websites, we use cookies which are small text files stored on the user’s browser. We use cookies to, for example, assist with site traffic analysis which includes tracking the time and date of website visits, pages viewed and referring URL’s. There are simple ways to refuse cookies, or accept them each time they are offered. Consult your browser’s online help for assistance on changing cookie settings or removing cookie files.
  label LINKS TO OTHER WEBSITES
  p Our website contains links to a limited number of other websites including those for our provincial and territorial associations. Imagine X is not responsible for the content or the privacy policies of these websites.
  label CONTACT US
  p If you have any questions about our privacy policy or the information you have provided to us online, simply email us at hello@imaginex.ca.
  button.btn--full(@click.prevent='closeModal') OK

</template>

<script>
import Modal from '../utils/Modal.vue'

export default {
  components: {
    Modal
  },
  computed: {
    visible() {
      return this.$store.state.director.privacy
    },
  },
  methods: {
    closeModal() {
      this.$store.dispatch('TOGGLE_PRIVACY')
    },
  },
}
</script>

<style lang='stylus' scoped>

@import "../../styles/main"

</style>
