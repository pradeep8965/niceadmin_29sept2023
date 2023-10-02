import Script from 'next/Script';
import Aside from "@/components/layouts/Aside";
import Footer from "@/components/layouts/Footer";
import Header from "@/components/layouts/Header";
import BreadCrumb from '@/components/layouts/BreadCrumb';

  
export default function AdminDashboardLayout({children}) {
	return (
			<>
				<Header />
				<Aside />
				<main id="main" className="main">
				<BreadCrumb />
				    {children}
				</main>				
				<Footer />
				<Script src="../assets/vendor/bootstrap/js/bootstrap.bundle.min.js"></Script>
				<Script src="../assets/vendor/apexcharts/apexcharts.min.js"></Script>
				<Script src="../assets/vendor/chart.js/chart.umd.js"></Script>
				<Script src="../assets/vendor/echarts/echarts.min.js"></Script>
				<Script src="../assets/vendor/quill/quill.min.js"></Script>
				<Script src="../assets/vendor/simple-datatables/simple-datatables.js"></Script>
				<Script src="../assets/vendor/tinymce/tinymce.min.js"></Script>
				<Script src="../assets/vendor/php-email-form/validate.js"></Script>
				<Script src="../assets/js/main.js"></Script>
                    
			</>
	)
}