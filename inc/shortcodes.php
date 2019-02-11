<?php

function ilona_shortcode_title( $atts = [], $content = null ) {
    ob_start();
    ?>
    <header class="entry-header">
        <?php the_title( '<h1 class="entry-title">', '</h1>' ); ?>
    </header><!-- .entry-header -->
    <?php
    return ob_get_clean();
}
add_shortcode( 'title', 'ilona_shortcode_title' );

?>