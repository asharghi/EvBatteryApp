

<template>
  <Frame>
    <Page :actionBarHidden="true" background="#2A2E3D">
      <GridLayout rows="*">
        <RiveView artbord="battery" stateMachine="state_machine" src="~/assets/rive/battery.riv"
             width="200" height="200" input="percent" :inputValue="true" />
      </GridLayout>
    </Page>
  </Frame>
</template>
