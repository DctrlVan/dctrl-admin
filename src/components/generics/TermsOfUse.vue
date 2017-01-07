<template>
  <Modal v-bind:visible="visible" v-bind:close="closeModal" v-bind:sm="true">
    <h1>Terms of Use Agreement</h1>
    <p>Please read these Terms of Use ("Terms") carefully before using the <router-link to="/home">www.imagine-x.ca</router-link> website and Imagine X Apps (the "Service") operated by Imagine X and its participants.</p>
    <p>The apps that Imagine X operates includes but not limited to:</p>
    <ul>
      <li>MLA Voting Records App</li>
      <li>Nominate a Candidate App</li>
    </ul>
    <p>The Service contains information, web pages, materials and hypertext links to websites that are of interest to Imagine X and the general public (the “Content”). The Content is offered in good faith and for informational purposes only. The Imagine X website and Imagine X Apps are provided as a service and Imagine X may, at any time and from time to time, delete, modify or supplement the Content without notice or liability to you.</p>
    <p>Imagine X and its participants may, at its discretion, add additional apps and content which will be governed by the Terms set forth in this agreement. Apps and links to apps may be removed from the website at Imagine X’s sole discretion.</p>
    <p>Your access to and use of the Service is conditioned on your unconditional acceptance of and compliance with these Terms. These Terms apply to all visitors, users and others who access or use the Service. By accessing or using the Service you agree to be bound by these Terms. If you disagree with any part of the terms, do not access or use the Service.</p>
    <label>LIMITED LIABILITY DISCLAIMER</label>
    <p>WARRANTY DISCLAIMER. THE SERVICE IS PROVIDED ON AN "AS IS" AND "AS AVAILABLE" BASIS. IMAGINE X AND ITS PARTICIPANTS DOES NOT ACCEPT ANY LIABILITY WHATSOEVER FOR YOUR USE OF OR ACCESS TO THIS WEBSITE. TO THE FULLEST EXTENT PERMITTED BY LAW, IMAGINE X DISCLAIMS MAKING ANY REPRESENTATIONS AND WARRANTIES OF ANY KIND WHATSOEVER IN RESPECT OF THE CONTENT OR THE SERVICE IN GENERAL. Imagine X AND ITS PARTICIPANTS DISCLAIMS ALL EXPRESS AND IMPLIED WARRANTIES INCLUDING, WITHOUT LIMITATION, THOSE OF TITLE, MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, NON-INFRINGEMENT OF PROPRIETARY RIGHTS AND THOSE ARISING BY LAW, UNDER STATUTE, IN TRADE, BY COURSE OF DEALING OR OTHERWISE. Without limiting the foregoing, Imagine X does not represent or warrant that:
    <ul class="list--clean">
      <li>(a) access to the Service will be secure, timely, error- or virus-free, continuous or uninterrupted;</li>
      <li>(b) communications to or from the Service will be secure or free from interception;</li>
      <li>(c) the Service and the Content will be accurate, complete or current; or</li>
      <li>(d) errors, defects and inaccuracies in the Service or the Content will be corrected.</li>
    </ul>
    <p>LIABILITY DISCLAIMER. IMAGINE X AND ITS PARTICIPANTS EXPRESSLY DISCLAIMS LIABILITY FOR ALL DAMAGES AND LOSSES (WHETHER DIRECT OR INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, PUNITIVE OR OTHERWISE) ARISING FROM OR IN ANY WAY RELATED TO YOUR USE OF OR ACCESS TO THIS WEBSITE OR THE CONTENT (INCLUDING HYPERTEXT LINKS PROVIDED ON THIS WEBSITE), INCLUDING, WITHOUT LIMITATION, DAMAGE TO ANY COMPUTER, SOFTWARE APPLICATION OR DATA BY ANY VIRUS THAT MIGHT BE TRANSMITTED OR ACTIVATED VIA THIS WEBSITE OR ACCESS TO THIS WEBSITE, ANY BREACH OF COPYRIGHT OR OTHER INTELLECTUAL PROPERTY RIGHT, AND CONTRAVENTION OF ANY LOCAL, NATIONAL OR INTERNATIONAL RESTRICTION ON THE PUBLICATION OR TRANSMISSION OF INFORMATION, WHETHER SUCH LIABILITY IS BASED ON CONTRACT, TORT, STATUTE, STRICT LIABILITY OR OTHERWISE, EVEN IF IMAGINE X OR ITS AGENTS HAVE BEEN ADVISED OF THE POSSIBILITY OF DAMAGES. It is solely your responsibility to take precautions to ensure that whatever you access or download from the World Wide Web is free of such items such a viruses, worms, Trojan horses and other items of a destructive nature.</p>

    <label>OWNERSHIP AND USE OF THE SERVICE AND CONTENT</label>
    <p>The Service and the Content is, and shall remain, the sole property of Imagine X. Your use of or access to the Service and/or Content shall not in any way transfer or assign to you any ownership or other proprietary rights in or to this Service or any Content. This Service and it’s Content is protected by all relevant Canadian and international copyrights in the design of this Service, including layout, typography underlying HTML, Java scripts, text, audio clips, video clips and graphics, and in the expression of the information contained herein, whether as a compilation or otherwise.</p>

    <label>WEB PRIVACY STATEMENT</label>
    <p>Your use of and access to the Service is subject to our privacy policy (as may be amended from time to time) and our privacy policy is incorporated into and forms a part of this Agreement. To review our privacy policy please <a href="#" @click.prevent="showPrivacyModal">click here</a>. Your continued use of and access to the Service constitutes your acknowledgement that you have read and agreed to the terms and conditions of our privacy policy.</p>

    <label>TERMINATION</label>
    <p>We may terminate or suspend access to our Service immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms. All provisions of the Terms which by their nature should survive termination shall survive termination, including, without limitation, ownership provisions, warranty disclaimers, indemnity and limitations of liability.</p>

    <label>LINKS TO OTHER WEB SITES</label>
    <p>Our Service may contain links to third­-party web sites or services that are not owned or controlled by Imagine X. Imagine X has no control over, and assumes no responsibility for, the content, privacy policies, or practices of any third party web sites or services. You further acknowledge and agree that Imagine X shall not be responsible or liable, directly or indirectly, for any damage or loss caused or alleged to be caused by or in connection with use of or reliance on any such content, goods or services available on or through any such web sites or services. We strongly advise you to read the terms and conditions and privacy policies of any third-­party web sites or services that you visit.</p>

    <label>GOVERNING LAW</label>
    <p>These Terms shall be governed and construed in accordance with the laws of the Province of British Columbia, Canada without regard to its conflict of law provisions. Our failure to enforce any right or provision of these Terms will not be considered a waiver of those rights. If any provision of these Terms is held to be invalid or unenforceable by a court, the remaining provisions of these Terms will remain in effect. These Terms constitute the entire agreement between us regarding our Service, and supersede and replace any prior agreements we might have between us regarding the Service.</p>

    <label>CHANGES</label>
    <p>Imagine X reserves the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material we will try to provide at least 30 days notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion</p>
    <p>By continuing to access or use our Service after those revisions become effective, you agree to be bound by the revised terms. If you do not agree to the new terms, please stop using the Service.</p>

    <label>CONTACT US</label>
    <p>If you have any questions about these Terms, please contact us at hello@imagine-x.ca.</p>

    <button class="btn--full" @click.prevent="closeModal">OK</button>
  </Modal>
</template>

<script>
import Modal from '../utils/Modal.vue'

export default {
  components: {
    Modal
  },
  computed: {
    visible() {
      return this.$store.state.director.tou
    },
  },
  methods: {
    closeModal() {
      this.$store.dispatch('TOGGLE_TOU')
    },
    showPrivacyModal(){
      this.$store.dispatch('TOGGLE_PRIVACY')
    }
  },
}
</script>

<style lang='stylus' scoped>

@import "../../styles/main";

</style>
