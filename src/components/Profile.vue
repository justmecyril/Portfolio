<template>
  <div class="main">
    <div class="intro" id="intro">
      <div class="home">
        <div class="content">
          <img src="@/assets/images/avatar.png" alt="" />
          <h3>cyril <span>semabia</span></h3>
          <h2 data-text="i am a frontend developer">
            i am a frontend developer
          </h2>
          <a href="#about" class="btn">about me</a>
        </div>
      </div>
    </div>

    <section class="about" id="about">
      <h1 class="heading">about <span>me</span></h1>
      <div class="row">
        <div class="image">
          <img src="@/assets/images/avatar.png" alt="" />
        </div>
        <div class="content">
          <h3>my name is <span> cyril semabia </span></h3>
          <p class="info">
            Front-end developer with background in networking and system
            administration. Targeting front-end specific roles.
          </p>
          <div class="box-container">
            <div class="box">
              <p>
                <span> <img src="@/assets/images/linkedin.png" alt="" /> </span>
                linkedin.com/in/cyril-semabia
              </p>
              <p>
                <span> <img src="@/assets/images/GitHub.png" alt="" /> </span>
                github.com/justmecyril
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="portfolio" id="portfolio">
      <h1 class="heading"><span> my </span> portfolio</h1>
      <div class="box-container">
        <div class="box">
          <img src="@/assets/images/img-1.jpeg" alt="" />
          <div class="content">
            <a href="" class="btn">learn more</a>
          </div>
        </div>
        <div class="box">
          <img src="@/assets/images/img-2.jpeg" alt="" />
          <div class="content">
            <a href="" class="btn">learn more</a>
          </div>
        </div>
        <div class="box">
          <img src="@/assets/images/img-1.jpeg" alt="" />
          <div class="content">
            <a href="" class="btn">learn more</a>
          </div>
        </div>
        <div class="box">
          <img src="@/assets/images/img-1.jpeg" alt="" />
          <div class="content">
            <a href="" class="btn">learn more</a>
          </div>
        </div>
        <div class="box">
          <img src="@/assets/images/img-1.jpeg" alt="" />
          <div class="content">
            <a href="" class="btn">learn more</a>
          </div>
        </div>
        <div class="box">
          <img src="@/assets/images/img-1.jpeg" alt="" />
          <div class="content">
            <a href="" class="btn">learn more</a>
          </div>
        </div>
      </div>
    </section>
    <section class="contact" id="contact">
      <h1 class="heading"><span> contact </span> me</h1>
      <div class="row">
        <div class="image">
          <img src="@/assets/images/contact-img.svg" alt="" />
        </div>
        <div class="content">
          <div class="box-container">
            <div class="box">
              <p>
                <span> <img src="@/assets/images/location.png" alt="" /> </span>
                Accra, Ghana
              </p>
              <p>
                <span> <img src="@/assets/images/phone.png" alt="" /> </span>
                +233242221481
              </p>
              <p>
                <span> <img src="@/assets/images/email.png" alt="" /> </span>
                kofisem@gmail.com
              </p>
              <p>
                <span> <img src="@/assets/images/skype.png" alt="" /> </span>
                kofisem@gmail.com
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
// Setting Variables
let countdown; // storing setInterval in this function to be able to stop it at zero.
const { responsiveVoice } = window;

export default {
  name: "Timer",
  data() {
    return {
      showTimer: `00:00`,
      endTime: `00:00`,
      seconds: 0,
      minutes: 0,
      enteredMins: "",
      chosenValue: "break",
      options: ["break", "mission", "deadline"],
      coretabs:
        "https://forums.coretabs.net/t/سلسلة-التحدي-الأسبوعي-التحدي-3/3578/12",
      pomodroMode: false,
      // stageOne: true,
      stageTwo: false,
      stageThree: false,
      stageFour: false,
      fiveBreak1: false,
      fiveBreak2: false,
      fiveBreak3: false,
      longBreak: false,
      // pomodroHistory: []
    };
  },
  methods: {
    handleOptions(event) {
      this.chosenValue = event.target.value;
    },
    shortBreak() {
      this.$on("shortBreak1", () => {
        // console.log('five mins break')
        this.$notify({
          group: "pomodro",
          type: "warn",
          title: "break!",
          text: "First short 5 minutes break started!",
        });
        this.$refs.five.click();
        this.fiveBreak1 = false;
      });
      this.$on("shortBreak2", () => {
        // console.log('five mins break')
        this.$notify({
          group: "pomodro",
          type: "warn",
          title: "break!",
          text: "Second short 5 minutes break started!",
        });
        this.$refs.five.click();
        this.fiveBreak2 = false;
      });
      this.$on("shortBreak3", () => {
        // console.log('five mins break')
        this.$notify({
          group: "pomodro",
          type: "warn",
          title: "break!",
          text: "Third short 5 minutes break started!",
        });
        this.$refs.five.click();
        this.fiveBreak3 = false;
      });
    },
    thirtyBreak() {
      this.$on("longBreak", () => {
        // console.log('long break time')
        this.$notify({
          group: "pomodro",
          type: "warn",
          title: "break!",
          text: "Long 30 minutes break started!",
        });
        this.$refs.thirty.click();
        this.longBreak = false;
      });
    },
    runPomodro() {
      this.pomodroMode = true; //running pomodro mode

      // notification
      this.$notify({
        group: "pomodro",
        type: "warn",
        title: "pomodro started!",
        text: "Pomodro mode started!",
      });

      // stage 1
      // console.log('stage 1')
      this.$notify({
        group: "pomodro",
        type: "success",
        title: "stage 1",
        text: "stage 1 started!",
      });
      this.$refs.work.click();

      // five minutes break
      this.fiveBreak1 = true;
      this.shortBreak();

      // stage 2
      this.stageTwo = true;
      this.$on("stageTwo", () => {
        this.$notify({
          group: "pomodro",
          type: "info",
          title: "stage 2",
          text: "stage 2 started started!",
        });
        // console.log('stage 2')
        this.$refs.work.click();
        this.stageTwo = false;
      });

      // five minutes break
      this.fiveBreak2 = true;
      this.shortBreak();

      // stage 3
      this.stageThree = true;
      this.$on("stageThree", () => {
        this.$notify({
          group: "pomodro",
          type: "info",
          title: "stage 3",
          text: "stage 3 started started!",
        });
        // console.log('stage 3')
        this.$refs.work.click();
        this.stageThree = false;
      });

      // five minutes break
      this.fiveBreak3 = true;
      this.shortBreak();

      // stage 4
      this.stageFour = true;
      this.$on("stageFour", () => {
        this.$notify({
          group: "pomodro",
          type: "info",
          title: "stage 4",
          text: "stage 4 started started!",
        });
        // console.log('stage 4')
        this.$refs.work.click();
        this.stageFour = false;
      });

      // long break
      this.longBreak = true;
      this.thirtyBreak();

      // closing pomodro mode
      // this.pomodroMode = false
    },

    // Resetting mechanism
    reset() {
      this.timeStop();
      this.showTimer = `00:00`;
      responsiveVoice.cancel();
    },
    timeStop() {
      clearInterval(countdown);
    },
    displayTimeLeft(seconds) {
      this.minutes = Math.floor(seconds / 60);
      const secondsLeft = seconds % 60;
      this.showTimer = `${this.minutes < 10 ? 0 : ""}${this.minutes}:${
        secondsLeft < 10 ? 0 : ""
      }${secondsLeft}`;
      //***************** UPDATED *********************

      // voice alarm for each minute
      if (secondsLeft === 0 && this.minutes !== 0) {
        responsiveVoice.speak(
          `${this.minutes} minutes remaining | till ${this.chosenValue} ends`
        );
      } else if (secondsLeft === 20 && this.minutes === 0) {
        responsiveVoice.speak(`20 seconds remaining`);
      } else if (this.minutes === 0 && secondsLeft === 0) {
        // responsiveVoice.speak(`Your Break Has Finished. Hurry up before you get fired! Thank you for using our services`)
      } else if (this.minutes === 0 && secondsLeft < 11) {
        responsiveVoice.speak(`${secondsLeft}`);
      }
    },
    displayEndTime(timestamp) {
      const end = new Date(timestamp);
      const hour = end.getHours();
      const CorrHours = hour > 12 ? hour - 12 : hour;
      const minutes = end.getMinutes();
      this.endTime = `${CorrHours < 10 ? 0 : ""}${CorrHours}:${
        minutes < 10 ? 0 : ""
      }${minutes}`;
    },
    startTimer(x) {
      this.reset();
      this.$refs.startSound.play();
      const targetSec = parseInt(x.target.dataset.time);
      this.timer(targetSec);
    },
    // timer mechanics
    timer(seconds) {
      this.reset();
      //constants
      const now = Date.now();
      const then = now + seconds * 1000;
      this.displayTimeLeft(seconds);
      this.displayEndTime(then);
      //setting animation in one second and storing it in a variable (countdown)
      //to be able to clearInterval after it reaches zero
      countdown = setInterval(() => {
        const remainedSeconds = Math.round((then - Date.now()) / 1000);
        //Checking when to stop the function
        if (remainedSeconds < 0) {
          clearInterval(countdown);
          return;
        }
        // ... what's next
        if (remainedSeconds == 0 && this.pomodroMode === true) {
          // console.log('pomodro active')

          if (this.fiveBreak1) this.$emit("shortBreak1");
          else if (this.stageTwo) this.$emit("stageTwo");
          else if (this.fiveBreak2) this.$emit("shortBreak2");
          else if (this.stageThree) this.$emit("stageThree");
          else if (this.fiveBreak3) this.$emit("shortBreak3");
          else if (this.stageFour) this.$emit("stageFour");
          else if (this.longBreak) this.$emit("longBreak");
        }

        //installing beeb sound
        if (remainedSeconds < 11) {
          for (let sec in remainedSeconds) {
            responsiveVoice.speak(`${sec}`);
          }
          this.$refs.beebSound.play();
        }
        // changing colors once reaching 10 seconds (needs fixing!)
        // if (remainedSeconds <= 11) {
        // not programmed yet
        // }

        //Displaying timer
        this.displayTimeLeft(remainedSeconds);
      }, 1000);
    },
    submitMins(e) {
      e.preventDefault();
      this.reset();
      const mins = this.enteredMins;
      this.timer(mins * 60);
      this.showTimer = `${mins}`;
    },
  },
  computed: {},
};
</script>

<style scoped>
a:link {
  color: aquamarine;
}
</style>
