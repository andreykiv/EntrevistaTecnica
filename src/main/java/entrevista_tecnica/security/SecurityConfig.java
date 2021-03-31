package entrevista_tecnica.security;

import java.util.Arrays;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.CorsConfigurationSource;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;

@Configuration
@EnableWebSecurity
public class SecurityConfig extends WebSecurityConfigurerAdapter{
	@Override
    protected void configure(HttpSecurity http) throws Exception {
		
        http.cors().and().csrf().disable().authorizeRequests()
            .antMatchers("/login", "/api/candidate/username/{username}", "/api/candidate" ).permitAll() //permitimos el acceso a /login a cualquiera
            .anyRequest().authenticated() //cualquier otra peticion requiere autenticacion
            .and()
            // Las peticiones /login pasaran previamente por este filtro
            .addFilterBefore(new LoginFilter("/login", authenticationManager()),
                    UsernamePasswordAuthenticationFilter.class)
            .addFilterBefore(new JwtFilter(),
                    UsernamePasswordAuthenticationFilter.class);
    }

   @Override
    protected void configure(AuthenticationManagerBuilder auth) throws Exception {
        // Creamos una cuenta de usuario por default
       auth.inMemoryAuthentication()
               .withUser("expert@hr.com")
               .password("{noop}passexpert")
               .roles("ADMIN");
       
       auth.inMemoryAuthentication()
			   .withUser("hruser")
			   .password("{noop}passhruser")
			   .roles("USER");
       
    }
   
   	//IMPLEMENTAMOS  CORS POLICY PARA TODAS LAS RUTAS y METODOS SELECCIONADOS
	@Bean
	CorsConfigurationSource corsConfigurationSource() {

		 CorsConfiguration configuration = new CorsConfiguration();
	        configuration.setAllowedOrigins(Arrays.asList("*"));
	        configuration.setAllowedMethods(Arrays.asList("GET", "PUT", "DELETE","POST"));
	        configuration.setAllowedHeaders(Arrays.asList("*"));
	        configuration.setExposedHeaders(Arrays.asList("x-auth-token", "Authorization"));
			final UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
			source.registerCorsConfiguration("/**", configuration);
			return source;
	}
}
