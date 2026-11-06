package io.spring.image.demo.application.jwt;

import com.fasterxml.jackson.annotation.JsonProperty;
import io.jsonwebtoken.Jwts;
import io.spring.image.demo.domain.AccessToken;
import io.spring.image.demo.domain.entity.User;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import javax.crypto.SecretKey;
import java.time.LocalDateTime;
import java.time.ZoneId;
import java.util.HashMap;
import java.util.Date;
import java.util.Map;

@Service
@RequiredArgsConstructor
public class JwtService {

    private final SecretKeyGenerator keyGenerator;

    public AccessToken generateToken(User user){
        var key = keyGenerator.getKey();
        var expirationDate = generateExpirationDate();
        var claims = generateTonkenClaims(user);

        String token = Jwts
                .builder()
                .signWith(key)
                .subject(user.getEmail())
                .expiration(expirationDate)
                .claims(claims)
                .compact();
        return new AccessToken(token);
    }

    private Date generateExpirationDate(){
        var expirationMinutes = 60;
        LocalDateTime now = LocalDateTime.now().plusMinutes(expirationMinutes);
        return Date.from(now.atZone(ZoneId.systemDefault()).toInstant());
    }

    private Map<String, Object> generateTonkenClaims(User user){
        Map<String, Object> claims = new HashMap<>();
        claims.put("name", user.getName());
        return claims;
    }

}
