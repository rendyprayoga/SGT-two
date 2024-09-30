<<<<<<< HEAD
<template>
  <div class="bg">
    <RouterLink to="/" class="brutalist-button">Close</RouterLink>
    <div class="donate-page">
      <h1 class="donate-header">Donate please,</h1>
      <p class="donate-subheader">we need your support like never before</p>

      <div class="single-payment">
        <h2>Single payment</h2>
        <p>Card number: <strong>4731 2196 1647 4239</strong></p>
        <p>
          Fondy direct link:
          <a> <strong>pay.fondy.eu/s/EdDlsY6XgRHV</strong></a>
        </p>
      </div>

      <div class="subscribe">
        <h2>Subscribe and be our regular patron</h2>
        <div class="buttons">
          <button class="brutalist-button">Fondy</button>
          <button class="brutalist-button">Patreon</button>
        </div>
      </div>

      <div class="cryptocurrency">
        <h2>Cryptocurrency</h2>
        <p>BTC: 1JzRCN5copEPkEncuT7z5eTbPZBxvPYb3</p>
        <p>ETH: 0x7b8916382387d2c34b4bcd38daf7071a1bb30dba</p>
      </div>

      <div class="paypal">
        <h2>PayPal</h2>
        <p><strong>paypal@isa.co.ua</strong></p>
      </div>

      <div class="euro">
        <h2>SWIFT in Euro (EUR)</h2>
        <p><strong>Beneficiary:</strong></p>
        <p>
          Account (IBAN): <strong>UA143123560000026007300972110</strong><br />
          CO “CF “INNOVATIVE SOLUTIONS FOR ANIMALS”<br />
          Address: Ukraine, Kiev, Sagaidachnogo Petra str, 25-B, floor 6, office
          603
        </p>
        <p><strong>Correspondent bank:</strong></p>
        <p>BIC (SWIFT) CODE: DEUTDEFF</p>
        <p>Bank name: DEUTSCHE BANK AG, Frankfurt am Main</p>
        <p>Account: 947057610</p>
        <p><strong>Beneficiary’s Bank:</strong></p>
        <p>BIC (SWIFT) CODE: COSBUAUKZAK</p>
        <p>Bank name: JCS STATE SAVINGS BANK OF UKRAINE</p>
        <p>Bank address: KIEV, UKRAINE</p>
      </div>

      <div class="US">
        <h2>SWIFT in USD</h2>
        <p><strong>Beneficiary:</strong></p>
        <p>
          Account (IBAN): <strong>UA143123560000026007300972110</strong><br />
          CO “CF “INNOVATIVE SOLUTIONS FOR ANIMALS”<br />
          Address: Ukraine, Kiev, Sagaidachnogo Petra str, 25-B, floor 6, office
          603
        </p>
        <p><strong>Correspondent bank:</strong></p>
        <p>BIC (SWIFT) CODE: BKTRUS33</p>
        <p>Deutsche Bank Trust Company Americas, New York, USA</p>
        <p>Account: 04-095-334</p>
        <p><strong>Account With Institution:</strong></p>
        <p>BIC (SWIFT) CODE: COSBUAUKZAK</p>
        <p>Bank name: JCS STATE SAVINGS BANK OF UKRAINE UZHHOROD BRANCH</p>
        <p>Bank address: KIEV, UKRAINE</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Donate",
};
</script>

<style scoped>
.bg {
  height: auto;
  background-color: transparent;

  background-image: linear-gradient(
      rgba(255, 255, 255, 0.8),
      rgba(255, 255, 255, 0.8)
    ),
    url("https://uploads-ssl.webflow.com/62640d8cb86529032eccb9d1/62645696be0723edc0b15145_pattern-small.svg");

  background-position: 0 0, 50%;

  background-size: auto, 90px;
  padding: 20px;
  background-repeat: repeat;
  object-fit: fill;
}

.brutalist-button {
  border: 2px solid #000;
  font-size: 14px;
  cursor: pointer;
  margin-bottom: 20px;
}

.donate-page {
  background-color: #ff97d0;
  border: 2px solid black;
  color: #000;
  padding: 15px;
  font-family: Arial, sans-serif;
  width: 75%;
  margin: 0 auto;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
  margin-top: 20px;
}

.donate-header {
  font-size: 22px;
  font-weight: bold;
}

.donate-subheader {
  font-size: 14px;
  margin-bottom: 10px;
}

.single-payment,
.subscribe,
.cryptocurrency,
.paypal,
.euro,
.US {
  border-top: 2px solid #000;
  margin-top: 8px;
  padding-top: 8px;
  font-size: 14px;
}

.buttons {
  display: flex;
  gap: 8px;
}

.brutalist-button:hover {
  color: #161616;
}
</style>
=======
<template>
  <div class="bg">
    <RouterLink to="/" class="brutalist-button">Close</RouterLink>
    <div class="donate-page">
      <h1 class="donate-header">Donate please,</h1>
      <p class="donate-subheader">we need your support like never before</p>

      <div class="single-payment">
        <h2>Single payment</h2>
        <p>Card number: <strong>4731 2196 1647 4239</strong></p>
        <p>
          Fondy direct link:
          <a> <strong>pay.fondy.eu/s/EdDlsY6XgRHV</strong></a>
        </p>
      </div>

      <div class="subscribe">
        <h2>Subscribe and be our regular patron</h2>
        <div class="buttons">
          <button class="brutalist-button">Fondy</button>
          <button class="brutalist-button">Patreon</button>
        </div>
      </div>

      <div class="cryptocurrency">
        <h2>Cryptocurrency</h2>
        <p>BTC: 1JzRCN5copEPkEncuT7z5eTbPZBxvPYb3</p>
        <p>ETH: 0x7b8916382387d2c34b4bcd38daf7071a1bb30dba</p>
      </div>

      <div class="paypal">
        <h2>PayPal</h2>
        <p><strong>paypal@isa.co.ua</strong></p>
      </div>

      <div class="euro">
        <h2>SWIFT in Euro (EUR)</h2>
        <p><strong>Beneficiary:</strong></p>
        <p>
          Account (IBAN): <strong>UA143123560000026007300972110</strong><br />
          CO “CF “INNOVATIVE SOLUTIONS FOR ANIMALS”<br />
          Address: Ukraine, Kiev, Sagaidachnogo Petra str, 25-B, floor 6, office
          603
        </p>
        <p><strong>Correspondent bank:</strong></p>
        <p>BIC (SWIFT) CODE: DEUTDEFF</p>
        <p>Bank name: DEUTSCHE BANK AG, Frankfurt am Main</p>
        <p>Account: 947057610</p>
        <p><strong>Beneficiary’s Bank:</strong></p>
        <p>BIC (SWIFT) CODE: COSBUAUKZAK</p>
        <p>Bank name: JCS STATE SAVINGS BANK OF UKRAINE</p>
        <p>Bank address: KIEV, UKRAINE</p>
      </div>

      <div class="US">
        <h2>SWIFT in USD</h2>
        <p><strong>Beneficiary:</strong></p>
        <p>
          Account (IBAN): <strong>UA143123560000026007300972110</strong><br />
          CO “CF “INNOVATIVE SOLUTIONS FOR ANIMALS”<br />
          Address: Ukraine, Kiev, Sagaidachnogo Petra str, 25-B, floor 6, office
          603
        </p>
        <p><strong>Correspondent bank:</strong></p>
        <p>BIC (SWIFT) CODE: BKTRUS33</p>
        <p>Deutsche Bank Trust Company Americas, New York, USA</p>
        <p>Account: 04-095-334</p>
        <p><strong>Account With Institution:</strong></p>
        <p>BIC (SWIFT) CODE: COSBUAUKZAK</p>
        <p>Bank name: JCS STATE SAVINGS BANK OF UKRAINE UZHHOROD BRANCH</p>
        <p>Bank address: KIEV, UKRAINE</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Donate",
};
</script>

<style scoped>
.bg {
  height: auto;
  background-color: transparent;

  background-image: linear-gradient(
      rgba(255, 255, 255, 0.8),
      rgba(255, 255, 255, 0.8)
    ),
    url("https://uploads-ssl.webflow.com/62640d8cb86529032eccb9d1/62645696be0723edc0b15145_pattern-small.svg");

  background-position: 0 0, 50%;

  background-size: auto, 90px;
  padding: 20px;
  background-repeat: repeat;
  object-fit: fill;
}

.brutalist-button {
  border: 2px solid #000;
  font-size: 14px;
  cursor: pointer;
  margin-bottom: 20px;
}

.donate-page {
  background-color: #ff97d0;
  border: 2px solid black;
  color: #000;
  padding: 15px;
  font-family: Arial, sans-serif;
  width: 75%;
  margin: 0 auto;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
  margin-top: 20px;
}

.donate-header {
  font-size: 22px;
  font-weight: bold;
}

.donate-subheader {
  font-size: 14px;
  margin-bottom: 10px;
}

.single-payment,
.subscribe,
.cryptocurrency,
.paypal,
.euro,
.US {
  border-top: 2px solid #000;
  margin-top: 8px;
  padding-top: 8px;
  font-size: 14px;
}

.buttons {
  display: flex;
  gap: 8px;
}

.brutalist-button:hover {
  color: #161616;
}
</style>
>>>>>>> 0e45d9790a0c1a93f647d2af75c3c4aff3c5a7a0
