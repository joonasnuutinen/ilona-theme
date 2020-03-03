<?php
/**
 * The template for displaying 404 pages (not found)
 *
 * @link https://codex.wordpress.org/Creating_an_Error_404_Page
 *
 * @package ilona
 */

get_header();
?>

	<div id="primary" class="content-area">
		<main id="main" class="site-main">

			<section class="error-404 not-found">
				<div class="entry-content">
					<h1 class="page-title">Sivua ei löydy</h1>

					<p>Etsimääsi sivua ei löydy.</p>

					<p><a rel="home" href="<?php echo esc_url( home_url( '/' ) ); ?>">Siirry etusivulle</a></p>
				</div><!-- .page-content -->
			</section><!-- .error-404 -->

		</main><!-- #main -->
	</div><!-- #primary -->

<?php
get_footer();
