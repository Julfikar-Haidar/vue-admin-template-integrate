<template>
    <div>
<!--        <h3>This is Dashboard Layout</h3>-->
        <slot></slot>
    </div>
</template>

<script>
    import '../../assets/admin/css/sb-admin-2.min.css'
    // import '../../assets/admin/vendor/jquery/jquery.min.js'
    import '../../assets/admin/vendor/bootstrap/js/bootstrap.bundle.min.js'
    import '../../assets/admin/vendor/jquery-easing/jquery.easing.min.js'
    import '../../assets/admin/js/sb-admin-2.min.js'
    import '../../assets/admin/vendor/chart.js/Chart.min.js'
    // import '../../assets/admin/js/demo/chart-area-demo.js'
    // import '../../assets/admin/js/demo/chart-pie-demo.js'

    export default {
        name: "DashboardLayout"
    }
</script>

<style scoped>

</style>

<!-- <script src="vendor/jquery/jquery.min.js"></script>-->
<!--  <script src="vendor/bootstrap/js/bootstrap.bundle.min.js"></script>-->

<!--  &lt;!&ndash; Core plugin JavaScript&ndash;&gt;-->
<!--  <script src="vendor/jquery-easing/jquery.easing.min.js"></script>-->

<!--  &lt;!&ndash; Custom scripts for all pages&ndash;&gt;-->
<!--  <script src="js/sb-admin-2.min.js"></script>-->

<!--  &lt;!&ndash; Page level plugins &ndash;&gt;-->
<!--  <script src="vendor/chart.js/Chart.min.js"></script>-->

<!--  &lt;!&ndash; Page level custom scripts &ndash;&gt;-->
<!--  <script src="js/demo/chart-area-demo.js"></script>-->
<!--  <script src="js/demo/chart-pie-demo.js"></script>-->